---
layout: page
title: "Q301332: Print Jobs Continue Spooling if Host Ends Print Job w/ CHASE RU"
permalink: kb/301/Q301332/
---

## Q301332: Print Jobs Continue Spooling if Host Ends Print Job w/ CHASE RU

	Article: Q301332
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the host system sends a CHASE Request Unit (RU) at the end of the print job,
	host print jobs that are sent through the host print service that is included
	with SNA Server and Host Integration Server 2000 may fail to print. SNA Manager
	lists the status of the host print session as "Spooling", and the Microsoft
	Windows NT or Microsoft Windows 2000 print queue lists the status of the print
	job as "Spooling".
	
	NOTE: A host print session may stay in a spooling state due to reasons other than
	the one described in this article.
	
	CAUSE
	=====
	
	The host print service sets an incorrect message key (that is, sequence number)
	on the response to the CHASE RU that it received from the host through the SNA
	Server service. Because the message key is incorrect, the SNA Server service is
	unable to correlate this response to the CHASE message that it sent to the host
	print service. The SNA Server service cannot send either the CHASE +RSP back to
	the host system or the appropriate message to the host print service to signal
	the end of the print job until it receives a valid response to the CHASE
	message. This results in the spooling print session and the print job failing to
	print.
	
	RESOLUTION
	==========
	
	SNA Server 4.0:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server version 4.0 service pack that contains this
	fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+-------------------------------------+
	| File name   | Date        | Time    | 
	+-------------------------------------+
	| Ppd3270.dll | 03-Jul-2001 | 10:56AM | 
	+-------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000:
	
	No fix is available for this problem in Host Integration Server 2000 at this
	time.
	
	STATUS
	======
	
	SNA Server 4.0:
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0
	SP4.
	
	Host Integration Server 2000:
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration Server
	2000.
	
	
	MORE INFORMATION
	================
	
	The following annotated trace that was captured using the SNA Trace program
	(Snatrace.exe) shows the CHASE RU and the response from the host print service
	that causes the problem that is described in this article.
	
	The host sends a CHASE RU similar to the following to the SNA Server (or HIS 2000 Server):
	
	DLC   0A160000->01020101 DLC DATA     
	DLC                      DAF:07 OAF:01 ODAI:off Normal 
	DLC                      CHASE  RQD DFC FI BC EC DR1 PI EB 
	DLC   
	DLC   ---- Header  at address 0122485C, 1 elements ----
	DLC   04020001 20002C00 070101F1 01005C0C     <.... .,....1..\.>
	DLC   
	DLC   ---- Element at address 01C27F48, start 10, end 13 ----
	DLC   4B814084                                <Ka@d            >
	
	The SNA Server service sends the CHASE RU to the host print service in the following format. 
	Note the "Msg key" field marked with ^^^.
	
	FMI   02020302->09120200 FMIST CTRL CHASE REQ  
	FMI                      ACK required Msg key:498 FMHI BCI ECI EBI 
	FMI                                   ^^^ ^^^^^^^
	FMI   ---- Header  at address 0153485C, 0 elements ----
	FMI   02011501 E4002C00 070101F2 01008C0C     <....U.,....2....>
	
	The host print service responds to the CHASE message with the following CHASE acknowledgement. 
	Note the "Msg key" field marked with ^^^.
	
	FMI   09120200->02020302 FMIST CTRL CHASE ACK  
	FMI                      Msg key:499 BCI BBIUI EBIUI 
	FMI                      ^^^ ^^^^^^^
	FMI   ---- Header  at address 01534DA4, 0 elements ----
	FMI   020215F1 40062C00 070101F3 0100C407     <...1@.,....3..D.>
	
	The SNA Server set the message key (msg key) field to 498, but the host print
	service's acknowledgment incorrectly set the message key to 499. The message key
	field for the acknowledgment should be the same as the message key for the
	request.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
