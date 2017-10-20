---
layout: page
title: "Q152940: XFOR: IMC Stops Sending Mail, Fails to Release TCP Connection"
permalink: /kb/152/Q152940/
---

## Q152940: XFOR: IMC Stops Sending Mail, Fails to Release TCP Connection

{% raw %}

	Article: Q152940
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbinterop
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Internet Mail Connector (IMC) may stop sending mail to a
	foreign SMTP host and fail to terminate the TCP connection until the
	MSExchangeIMC service is stopped and restarted.
	
	CAUSE
	=====
	
	An RFC821 SMTP protocol violation of interrupting the IMC's transmission of SMTP
	message DATA may cause an IMC thread to become blocked. Depending on how the
	target host requests the connection be closed (FIN or RST), the connection may
	remain open.
	
	WORKAROUND
	==========
	
	This SMTP protocol violation can be avoided by configuring the IMC to restrict
	maximum message size on a "per domain" basis. This option is configured in
	Exchange Administrator, "<Internet Mail Connector>.Internet Mail.Email
	Domain.Add.Maximum Size (KB):"
	
	It is prudent to configure this setting when communicating with foreign SMTP
	hosts that have a maximum inbound message size limit, for the followingreasons:
	
	- It avoids the issue described in this article.
	
	- A non-delivery report (NDR) is returned to the originator of the message
	  informing them of the limitation *before* the IMC attempts to send the large
	  message. This results in more efficient IMC performance.
	
	MORE INFORMATION
	================
	
	Proper behavior for conversations between SMTP mail hosts is documented in
	RFC821. In cases where these symptoms (listed under SYMPTOMS above) have been
	observed, the target SMTP host interrupts the IMC's DATA transmission with a 552
	error (sender's message has exceeded fixed maximum message size).
	
	While this is a valid error message, the fact that it is returned to the IMC in
	the middle of the transmission of the DATA portion of a message is a protocol
	violation. In the case of an error during the DATA transmission, it is the
	target's responsibility to continue accepting the message (discarding received
	data if necessary), and *after completion,* return the reply code for the DATA
	command to the sending side.
	
	The following sections from RFC821 detail the specifics for this issue:
	
	  4.2, paragraph 1, "... Every command must generate exactly one reply."
	
	  4.3, "Command-reply" sequence for DATA diagrammed
	
	  4.4, State diagram for DATA - Notes: "Note that the data here is a series of
	  lines sent from the sender to the receiver with no response expected until
	  the last line sent."
	
	Example (successful) SMTP Conversation:
	
	I = IMC (initiator), T= Target (receiver)
	
	   T: <waiting for connection on TCP port 25>
	   I: <open connection to target>
	   T: 220 tin.pan.alley.com SMTP service ready
	   I: HELO cartoonville.com
	   T: 250 tin.pan.alley.com says hello to cartoonville.com
	   I: MAIL FROM: <clem@cartoonville.com>
	   T: 250 sender OK
	   I: RCPT TO: <ditty@tin.pan.alley.com>
	   T: 250 Recipient OK
	x   I: DATA
	   T: 354 Enter mail, end with "." on a line by itself
	*   I: **** IMC begins sending a message header and body, and according to
	   I: RFC821, 4.4, "Note that the data here is a series of lines sent from
	   I: the sender to the receiver with no response expected until the last
	   I: line sent." The last line sent is signified by "." on a line by
	   I: itself - which is coming up next (note: this DATA content portion is
	   I: not usually logged)****
	*   I: .
	y   T: 250 message sent
	   I: QUIT
	   T: 221 tin.pan.alley.com closing connection
	   I: <Closes connection>
	   T: <closes connection>
	
	Notice that once the DATA command (x) has been positively acknowledged, the IMC
	expects to send the message data uninterrupted (lines between asterisks,
	inclusive) until it signifies the last line (the last asterisk). Then the
	following line (y) is the appropriate point at which success or error codes
	should be returned from the target.
	
	Example network trace summary (failure):
	
	3076    IMC >>> Target     SMTP
	Data - continued from frame 3074, 536 bytes
	(IMC is sending DATA)
	3077    Target >>> IMC     TCP
	.A...., len:    0, seq:1417586500-1417586500, ack: 136770891, win:  967
	(Target ACKs the DATA)
	3078    IMC >>> Target     SMTP
	Data - continued from frame 3076, 536 bytes
	(sending more)
	3079    Target >>> IMC     TCP
	.A...., len:    0, seq:1417586500-1417586500, ack: 136771427, win:  967
	(ACK'd)
	3080    IMC >>> Target     SMTP
	Data - continued from frame 3078, 536 bytes
	(sending more - IMC is not finished sending DATA yet)
	3081    Target >>> IMC     SMTP
	Rsp: Requested mail action aborted: exceeded storage allocation, 54 bytes
	(frame 3081 is the first protocol violation - this frame contains the 552
	error code)
	3082    Target >>> IMC     SMTP
	Rsp: Service not available, closing transmission channel, 46 bytes
	(this frame is another protocol violation - this frame contains a 421 error
	code "service unavailable")
	3083    Target >>> IMC     TCP
	.A...F, len:    0, seq:1417586599-1417586599, ack: 136771427, win:  967
	(this is a TCP FIN frame. See below)
	3084    IMC >>> Target     TCP
	.A...., len:    0, seq: 136771963-136771963, ack:1417586599, win: 8254
	(this is a TCP ACK frame, which ACKs through frame 3082)
	3085    IMC >>> Target     TCP
	.A...., len:    0, seq: 136771963-136771963, ack:1417586600, win: 8254
	(this is another TCP ACK frame, ACKing frame 3083, the Target's FIN)
	
	In frame 3080, the IMC is still sending more message DATA. In frame 3081 &
	3082 the target interrupts this send, returning SMTP error codes. The target
	should wait until the IMC completed sending DATA before returning these codes.
	
	It has also been noted that receiving a FIN from the target may not terminate the
	TCP connection. The procedure for closing a TCP connection is documented in
	section 3.5 of RFC793. It states:
	
	  The user who CLOSEs may continue to RECEIVE until he is told that the other
	  side has CLOSED also.
	
	In the trace above, the target sends a FIN in frame 3083, which informs the IMC
	that it should not expect more data from the target. This action is not a TCP
	protocol violation. The IMC ACKs the FIN with frame 3085, and, because it is in
	the middle of sending message DATA, resumes sending, which is now blocked from
	the previous SMTP protocol violations (frames 3081 and 3082).
	
	According to RFC793, the method to unconditionally abort a TCP connection is by
	sending an RST [reset] frame. Note, however, that this defeats any ability to
	provide a "reason" for the connection termination to the applications using the
	connection.
	
	Additional query words: MSExchangeIMC
	
	======================================================================
	Keywords          : kb3rdparty kbinterop 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
