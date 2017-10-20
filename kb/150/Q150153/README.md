---
layout: page
title: "Q150153: RAS Error: &quot;Event 20077...The Account Is Disabled&quot;"
permalink: /kb/150/Q150153/
---

## Q150153: RAS Error: &quot;Event 20077...The Account Is Disabled&quot;

{% raw %}

	Article: Q150153
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51 95
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use the account lockout feature in User Manager on your Windows NT RAS
	server, you may eventually see the following error in the System Log of the
	Event Viewer:
	
	  Event ID: 20077 Source: Remote Access Service
	
	  An error occurred in the Point to Point Protocol module on port COM<x. The
	  account is disabled.
	
	CAUSE
	=====
	
	This error results from an RAS client's exceeding the number of bad logon
	attempts permitted by the setting in the Account Policy option of the User
	Manager.
	
	WORKAROUND
	==========
	
	By itself, the error message text for event 20077 does not provide the
	information needed to identify the RAS client responsible for the error. To
	track the source of the invalid logon attempts, you can enable the Auditing for
	Logon Failure option. To do this, go into User Manager, open the Policies menu,
	and use the Auditing option to enable Auditing for Logon Failure." You should
	then be able to correlate the failed logon error message with the RAS client
	that triggered the error.
	
	Each Security Log logon failure entry will record the user name and time of the
	failed logon attempt. This record will show the reason as "Unknown user name or
	bad password." When the user exceeds the bad logon attempt limit, the Security
	Log will record a logon failure and give the reason "Account locked out." This
	last failure should correspond exactly in time to the event 20077 in the System
	Log.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When the limit of bad logon attempts is exceeded, on a Windows NT 3.5 or 3.51
	RAS client, the following error will display on the screen:
	
	  Error 67: The account is disabled.
	
	When the bad logon limit is reached but not exceeded by a Windows 95 dial-up
	networking (DUN) client to an NT RAS server, the client may display the
	following error:
	
	  The computer you have dialed into has denied access because your user name
	  and/or your password is invalid on the domain.
	
	When a Windows 95 DUN client exceeds the logon limit, the following error is
	displayed:
	
	  Your account is not active. Contact your network administrator.
	
	Additional query words: login logout freeze out lock
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : 3.50 3.51 95
	
	=============================================================================
	

{% endraw %}
