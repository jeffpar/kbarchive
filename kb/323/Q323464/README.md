---
layout: page
title: "Q323464: Err Msg: The Invitation from 'User Name' to Use Application..."
permalink: /kb/323/Q323464/
---

## Q323464: Err Msg: The Invitation from 'User Name' to Use Application...

{% raw %}

	Article: Q323464
	Product(s): The Microsoft Network
	Version(s): 1,2.2
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN Messenger Service, versions 1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive an error message if you try to use any of the following
	functionality between an MSN Messenger client computer that is running Microsoft
	Windows XP and an MSN Messenger client that is running an earlier version of
	Windows, such as Microsoft Windows 2000:
	
	- Application sharing
	
	- Whiteboard
	
	- File transfer
	
	The receiving client may receive the following error message:
	
	  The invitation from <user_name> to start using <name_of_function>
	  is declined. You need to upgrade to Windows XP to use this feature.
	
	The sending client may receive the following error message:
	
	  <Recipient's_user_name> does not have <name_of_function>
	  installed (or it is disabled) and is not able to accept your invitation.
	
	CAUSE
	=====
	
	This issue may occur because the MSN Messenger client that is installed on
	Windows XP uses Session Initiation protocol (SIP) to initiate a session for the
	function that is called (for example, Application sharing). SIP is currently
	supported on Windows XP only. The program functionality still uses port 1503,
	which is the standard Microsoft NetMeeting port, after it is connected; however,
	signaling is now processed differently. Signaling requires Windows XP to
	interpret the incoming request properly.
	
	RESOLUTION
	==========
	
	If you are using a client that is running Windows XP and you want to use any of
	the features that are described in the "Summary" section, manually start
	NetMeeting to communicate with the client that is running an earlier version of
	Windows:
	
	1. Click Start, and then click Run.
	
	2. Type "conf.exe" (without the quotation marks), and then click OK.
	
	3. After NetMeeting starts, on the Call menu, click New Call.
	
	4. Type either the computer host name or the Internet Protocol (IP) address of
	  the client that you want to communicate with.
	
	WORKAROUND
	==========
	
	To work around this issue, use either of the following methods:
	
	- Upgrade the recipient's computer to Windows XP.
	
	  -or-
	
	- Ask the user of the MSN Messenger client that is running an earlier version
	  of Windows to send a NetMeeting invitation to the MSN Messenger client that
	  is running Windows XP.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbMSNSearch kbMSNMessService
	Version           : :1,2.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
