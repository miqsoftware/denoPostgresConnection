const env = Deno.env.toObject();
const PORT = env.PORT || 9000;

export {
    PORT
}
