---
layout: page
title: "Q152923: XCLN: Can't Change Expired Password From MAC Exchange Client"
permalink: /kb/152/Q152923/
---

## Q152923: XCLN: Can't Change Expired Password From MAC Exchange Client

{% raw %}

	Article: Q152923
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbusage kbWin2000PreSP1Fix kbWin2000sp1Fix
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error messages appear when the Windows NT domain password for a
	Microsoft Exchange Macintosh client expires:
	
	  Your Microsoft Exchange Server is unavailable.
	
	  You can retry connecting to the server using the network, or work offline and
	  connect using dial-up networking.
	
	  You must change your password before logging on for the first time.
	
	You can then log on to Microsoft Exchange in the offline mode. Errors may occur,
	stating that the folders stored on the server cannot be opened. Once logged on
	offline, the user attempts to change the password from within Microsoft Exchange
	by selecting the Password Change option on the Tools menu (to do this, click
	Options, click Exchange Server, and then click Password Change). The correct
	information is given and the AppleTalk zone window is displayed. The final error
	message states:
	
	  The NT domain password could not be changed. A required action was not
	  successful due to an unspecified error.
	
	CAUSE
	=====
	
	Changing an expired domain password from within Exchange is not supported in the
	Microsoft Exchange Macintosh client. Windows NT Server does not support
	interactive domain logons for Macintosh clients. Interactive logons are required
	for the Macintosh client to get information such as how many days are left until
	the password's expiration.
	
	Changing the Windows NT domain password before it expires is supported from
	within Exchange.
	
	WORKAROUND
	==========
	
	There are four possible workarounds:
	
	- Set the Maximum Password Age under Account Policies in User Manager to
	  "Password Never Expires." This affects all security accounts manager (SAM)
	  accounts.
	
	- Individually set "Password Never Expires" for each Macintosh user account
	  under User Properties in User Manager.
	
	- The administrator can manually reset the password each time it expires.
	
	- An expired password can be changed over Appletalk; this is supported. Windows
	  NT 3.51 with Service Pack 5, or a later version of Windows NT, is required on
	  the primary domain controller (PDC).
	
	WARNING: Using Registry Editor can cause serious, system-wide errors that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	Also, a second requirement for this workaround is that the AppletalkClientSupport
	registry setting under HKEY_LOCAL_MACHINE\system\currentcontrolset\control\lsa
	needs to be set on the PDC as follows:
	
	  AppletalkClientSupport REG_DWORD 1
	
	The steps for changing an expired password over Appletalk are as follows:
	
	1. Install Windows NT Services for Macintosh on a computer running Windows NT
	  (see Windows NT version requirements above).
	
	2. The Macintosh user connects to the Windows NT server using the AppleShare
	  option from the Chooser.
	
	3. The Macintosh user selects the "Microsoft Authentication" logon method.
	
	4. The Macintosh user selects Microsoft UAM Volume.
	
	5. The Macintosh user drags the AppleShare Folder from within the UAM Volume to
	  his or her system folder. (See Readme.uam in this folder for important
	  installation information--especially localization requirements.)
	
	6. The Macintosh user drags Microsoft UAM Volume to the Trash to log off the
	  Windows NT server.
	
	7. The Macintosh user reconnects to the Windows NT Server from the Macintosh
	  client and specifies the Microsoft Authentication logon method.
	
	8. The UAM will handle the appropriate password expiration scenarios and allow
	  the user to change his or her password at logon.
	
	9. Once the password has been changed, the user can just click Cancel rather
	  than mounting a volume and dragging it to the Trash.
	
	Additionally, note that the default behavior when an account is created is to
	require the user to change the password at next logon. This works the same way
	as an expired password. In this case the administrator must clear the "User Must
	Change Password at Next Logon" option under User Properties in User Manager for
	Domains.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbusage kbWin2000PreSP1Fix kbWin2000sp1Fix 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac kbExchange400Mac
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
