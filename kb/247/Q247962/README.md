---
layout: page
title: "Q247962: Cannot Open 16-Bit Exchange EFD Form Using Outlook 97 in TSE"
permalink: /kb/247/Q247962/
---

## Q247962: Cannot Open 16-Bit Exchange EFD Form Using Outlook 97 in TSE

	Article: Q247962
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbWinNT4sp6fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a 16-bit Microsoft Exchange Electronic Forms Designer
	(EFD) form with Microsoft Outlook 97 running inside a Terminal Server client
	window, you may receive the following error message:
	
	  The form you have selected could not be displayed. The form required to view
	  this message cannot be displayed. Contact your administrator.
	
	If you receive this error message, one or both of the following events are
	written to the Terminal Server computer's system event log:
	
	   - Event ID: 10000 Source: DCOM Type: Error
	  Description: Unable to start a DCOM Server:
	  {B6EC1632-E61D-11D2-85EA-0000F87A5571}. The error: "Unable to perform a
	  security operation on an object which has no associated security. "
	
	- Event ID: 10010 Source: DCOM Type: Error
	  Description: The server {B6EC1632-E61D-11D2-85EA-0000F87A5571} did not
	  register with DCOM within the required timeout.
	
	If you run Outlook 97 on the console of the Terminal Server computer, you can
	open the same 16-bit form without the error message being displayed.
	
	CAUSE
	=====
	
	In some situations, when the first 16-bit program to be run in the current
	user's logon session is invoked using COM, the system may create a new or
	additional Windows NT Virtual DOS Machine (NTVDM) that runs in the local
	system's security context, instead of in the security context of the logged-on
	user. Local system does not have the required permissions to load the form, and
	the error message is displayed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Windows NT
	Server 4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	Ensure that the Wowexec tool (Wowexec.exe) is running in the context of the
	logged-on user before you attempt to load a 16-bit form, using either of the
	following methods:
	
	- Click Start, click Run, type "wowexec.exe" (without the quotation marks), and
	  then click OK.
	
	- Run Wowexec.exe from the user's logon script.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Server 4.0,
	Terminal Server Edition. This problem was first corrected in Microsoft Windows
	NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
