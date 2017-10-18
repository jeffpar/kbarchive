---
layout: page
title: "Q319419: Unable to Log On to Host Computer When You Use 3270 SSO"
permalink: kb/319/Q319419/
---

## Q319419: Unable to Log On to Host Computer When You Use 3270 SSO

	Article: Q319419
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4
	Last Modified: 12-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a 3270 emulator that is configured to use the Single Sign-On (SSO)
	feature that is available with SNA Server and Host Integration Server (HIS)
	2000, and you try to log on to an application that is running on an IBM
	mainframe computer, you may receive an error message from the mainframe
	application that indicates an invalid user ID or password.
	
	The actual symptoms will vary depending on the 3270 emulator that you use and the
	mainframe application that you try to access.
	
	CAUSE
	=====
	
	Under certain conditions, the SNA Server service (Snaservr.exe) may not
	correctly identify the predefined 3270 SSO replacement strings for the mainframe
	user ID and password. For example, this problem can occur if the first character
	of the 3270 replacement string for the mainframe user ID is located just prior
	to the actual 3270 SSO replacement string.
	
	WORKAROUND
	==========
	
	If a duplicate character in the data message that contains the replacement
	strings causes this behavior, change the 3270 SSO replacement strings. Please
	refer to the SNA Server or HIS 2000 online documentation for details about the
	how to change the 3270 SSO replacement strings.
	
	For additional information about 3270 SSO replacement strings, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q291805 3270 SSO Fails If 3270SSOUserTag and 3270SSOPwdTag Use Same Value
	
	STATUS
	======
	
	SNA Server 4.0
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0,
	4.0 SP1, 4.0 SP2, 4.0 SP3, and 4.0 SP4.
	
	
	Host Integration Server 2000
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration Server
	2000.
	
	
	MORE INFORMATION
	================
	
	The problem described here occurs only under very specific circumstances. The
	following is an example of one scenario where the problem can occur.
	
	NOTE: This example uses the default 3270 SSO replacement strings (MS$SAMEU and
	MS$SAMEP).
	
	1. A 3270 emulator starts and the mainframe application sends a sign-on screen
	  to the 3270 emulator that prompts for the user's host user ID and password.
	
	2. The 3270 emulator is set up to use a logon script or macro to automate the
	  logon process. The logon script or macro enters the 3270 SSO replacement
	  strings at the user ID and password prompts.
	
	3. When the 3270 logon script submits the information to the mainframe
	  application, the following message is sent to the SNA Server or HIS 2000
	  Server for processing.
	
	NOTE: The following message was capture with the SNA Trace program, which
	captures 3270 message traces. The trace excerpt is annotated to indicate the
	3270 SSO replacement strings, which are underlined with carat (^) characters.
	Also noted in the trace excerpt is an "M" that is underlined with tilde (~)
	characters.
	
	  FMI   03120500->01020302 FMI DATA  
	  FMI                      NO ACK reqd Key:2 Seq:1 FMHI BCI ECI COMMIT
	  FMI                      BBI EBI CDI SDI CODE ENCRYP ENPAD QRI CEI
	  FMI                      BBIUI EBIUI RBI 
	  FMI   
	  FMI   ---- Header  at address 012244B4, 1 elements ----
	  FMI   00050002 FFFF2C00 02010001 0100FC08     <......,.........>
	  FMI   
	  FMI   ---- Element at address 01C135A4, start 4, end 40 ----
	  FMI   2C000102 00010390 A07DD6F6 11D4D6D4     <,........}O6.MOM>
	                                     ~~  ^^
	  FMI   E25BE2C1 D4C5E411 D5E6D4E2 5BE2C1D4     <S[SAMEU.NWMS[SAM>
	        ^^^^^^^^ ^^^^^^       ^^^^ ^^^^^^^^
	  FMI   C5D7115C 7D                             <EP.\}           >
	        ^^^^
	
	The "M" that precedes the leading "M" for the MS$SAMEU replacement string is part
	of a 3270 Set Buffer Address (SBA) command. Because the "M" appears prior to the
	replacement string, the logon script sends an invalid user ID to the mainframe
	application.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
