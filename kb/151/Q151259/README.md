---
layout: page
title: "Q151259: New Netlogon Registry Entry for Dialup Routers"
permalink: /kb/151/Q151259/
---

## Q151259: New Netlogon Registry Entry for Dialup Routers

{% raw %}

	Article: Q151259
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A user who logs on to a network where the domain controller is across a dialup
	router sees the following message:
	
	  Dialog box message title: Logon Message
	
	  A domain controller for your domain could not be contacted. You have
	  been logged on using cached account information. Changes made to your
	  profile since you last logged on may not be available.
	
	The user encounters this message unless the router happens to have an existing
	connection open, in which case the user is validated normally by the domain
	controller.
	
	CAUSE
	=====
	
	A dialup router takes longer to make a connection to the remote network than
	Netlogon will wait, so Netlogon assumes no domain controller is available on the
	network. A dialup router can take as long as 30 to 90 seconds to make a
	connection to the remote network. Netlogon by default will send out three
	broadcast/multicast <1C> frames looking for the domain controller at
	5-second intervals. This is a total of approximately 15 seconds that the dialup
	router has to make the connection and pass the frame before Netlogon times out
	and uses cached credentials to validate the user.
	
	RESOLUTION
	==========
	
	Apply the hotfix mentioned below. The hotfix consists of a new Netlogon Registry
	entry that adds an additional delay to each of the Netlogon broadcast/multicast
	<1C> frames sent. The net formula for wait time is as follows:
	
	  5 seconds + ( ExpectedDialupDelay / 3 ).
	
	If the ExpectedDialupDelay is set to 90 seconds, the wait time would be:
	
	  5 + ( 90 / 3 ) = 35,
	
	thus, a 35-second interval between frames.
	
	The Registry location for the new parameter is:
	
	  Location: HKLM\System\CCS\Services\Netlogon\Parameters
	  Value Name: ExpectedDialupDelay
	  Data Type:  Reg_Dword
	  Data Value is in seconds.
	
	Note that you can also add this registry entry to a Windows NT 4.0-based server
	manually.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
