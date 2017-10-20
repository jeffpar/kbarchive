---
layout: page
title: "Q290508: Configuring the 3270 Emulator to Use SSO with the HAC"
permalink: /kb/290/Q290508/
---

## Q290508: Configuring the 3270 Emulator to Use SSO with the HAC

{% raw %}

	Article: Q290508
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure the 3270 emulator that is included with
	SNA Server (version 3.0 Service Pack [SP] 1 and later) and Host Integration
	Server 2000 to take advantage of single sign-on (SSO) while accessing the host
	account cache (HAC).
	
	MORE INFORMATION
	================
	
	Benefits of Using SSO and the HAC
	---------------------------------
	
	- A script file can automate the keystroke logon process as well as include
	  application information such as TSO, IMS, and so forth.
	
	- An end-user or administrator can create one script file that could be used
	  for all 3270 users when accessing a host application/mainframe.
	
	- The script file includes MS$SAMEU (as the userid value) and MS$SAMEP (as the
	  password value) instead of the user's clear text userid and password. This
	  eliminates security concerns.
	
	NOTES:
	
	- Third-party emulators can be used for SSO but must support "scripting" of
	  user input. The example script files in this article may differ from
	  third-party emulators.
	
	- The actual text description in these example script files may differ since
	  accessing host applications and logging onto the mainframe can vary among
	  users.
	
	- Host security components, a host security domain, and a populated HAC must be
	  configured before "look-ups" to the HAC can occur. This article assumes that
	  these steps are already completed.
	
	For additional information on the HAC and the host security components, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q175063 Host Security Integration Setup and Architectural Overview
	
	Steps to Use the 3270 Emulator with a Script File
	-------------------------------------------------
	
	- 
	
	  Step 1: Configuring a 3270 Script for SSO:
	
	  a. Start the 3270 emulator.
	
	  b. From the Session menu, choose Connect.
	
	  c. From the Script menu, choose Record. The record facility converts these
	     actions into a logon script. The default script file is named Logon.lsc
	     and is located in the <snaroot> folder (usually C:\Sna\System).
	
	  d. Connect to the appropriate host application (for example, TSO or IMS). For
	     the following example, TSO is selected.
	
	  e. Log on to the host using a valid mainframe userid and password.
	
	  f. When you are finished recording your logon script, from the Script menu,
	     choose Stop.
	
	  g. To verify that your script works, you must first disconnect your session:
	     from the Session menu, click Disconnect.
	
	  h. From the Session menu, choose Connect.
	
	  i. From the Script menu, choose Play.
	
	  Optionally, you can use one of the following procedures to configure the logon
	  script to run automatically when you connect:
	
	   - From the Script menu, choose Auto Run. When you subsequently establish a
	     connection to the host, the logon script runs automatically.
	
	  -or-
	
	   - From the Session menu, choose Autoconnect. Every time you subsequently
	     start the 3270 client, the connection to the host will be made and you
	     will be logged on automatically.
	
	  Example 3270 Script file (Logon.lsc):
	
	  
	
	  SETTIMEOUT 30,EXIT
	  WAITSESSION SSCP
	  ; Wait for banner. Wait <delay> can be replaced with WaitString "<string>"
	  WAIT 3
	  SEND TSO@E
	  WAITSESSION LULU
	  ; Wait for screen after BIND. Wait <delay> can be replaced with WaitString "<string>"
	  WAIT 3
	  SEND MYUSERID@E
	  SEND MYPASSWD@E
	  EXIT:
	
	  The following is a list of script file content descriptions:
	
	  - The semi-colon (;) without quotes = remarks
	  - TSO = the subsystem application being selected in this example
	  - @E = Enter key was pressed
	  - MYUSERID = real mainframe userid
	  - MYPASSWD = real mainframe password
	  - @T = Tab key being pressed (not included in this example)
	
	- 
	
	  Step 2: Edit the 3270 Script to Use SSO with the HAC:
	
	  a. Using any text editor, such as Microsoft Notepad, edit the Logon.lsc
	     script file.
	
	  b. Replace the real mainframe userid and password with "MS$SAMEU" (without
	     the quotation marks) and "MS$SAMEP" (without the quotation marks),
	     respectively.
	
	  c. Save and close the file, and then test this new script with the same steps
	     as before.
	
	  NOTE: If you make multiple script files with different names for accessing
	  other applications, you can choose to use them by doing this:
	
	  a. From the Session menu, choose Session Configuration. The 3270 Settings
	     dialog box appears.
	
	  b. In the Script File box, click Browse to select another script file.
	
	  c. Double-click the script file that you want to use.
	
	  d. Click OK.
	
	  The newly edited script file from step 1 should now look like this:
	
	  
	
	  SETTIMEOUT 30,EXIT
	  WAITSESSION SSCP
	  ; Wait for banner. Wait <delay> can be replaced with WaitString "<string>"
	  WAIT 3
	  SEND TSO@E
	  WAITSESSION LULU
	  ; Wait for screen after BIND. Wait <delay> can be replaced with WaitString "<string>"
	  WAIT 3
	  SEND MS$SAMEU@E
	  SEND MS$SAMEP@E
	  EXIT:
	
	  With host security configured, the HAC populated with an actual mainframe
	  userid and password, the following steps occur to complete SSO while using
	  the HAC:
	
	  a. When the 3270 emulator starts up (if configured to automatically run the
	     scripted logon), MS$SAMEU and MS$SAMEP are passed to the SNA Server/HIS
	     2000 server.
	
	  b. SNA Server/HIS 2000 checks if the Windows NT or Windows 2000 user that is
	     making this request is a member of the host security domain "local group".
	
	  c. SNA Server/HIS 2000 then scans the data stream. It recognizes MS$SAMEU and
	     MS$SAMEP and performs a "look-up". It then substitutes MS$SAMEU and
	     MS$SAMEP for the real host userid and password that are configured in the
	     HAC.
	
	  For information and caveats regarding the special keywords MS$SAMEU and
	  MS$SAMEP, see the following Microsoft Knowledge Base article:
	
	  Q291805 3270 SSO Fails If 3270SSOUserTag and 3270SSOPwdTag Use Same Value
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbsna400sp4 kbsna300 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	
	=============================================================================
	

{% endraw %}
