function ChatDash(){
    return(
        <div>
            <div className="chatInputWrapper">
                <form>
                    <input className="textarea_input"
                    type='text'
                    placeholder="Enter your message..." 
                    />
                    <button className="textare_btn" type="submit" />
                </form>
            </div>
        </div>
    )
}

export default ChatDash;
