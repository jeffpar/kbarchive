---
layout: page
title: "Q143200: RAS Server Does Not Prompt Client for a Callback Number"
permalink: /kb/143/Q143200/
---

## Q143200: RAS Server Does Not Prompt Client for a Callback Number

{% raw %}

	Article: Q143200
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Windows NT RAS client dials into a Windows NT RAS server using a user name and
	password that are set up for server callback with the phone number "set by
	caller." The server never prompts the user for a phone number to call the client
	back, it just authenticates and lets the user connect.
	
	Similarly, if a Windows NT RAS client dials in to a Windows NT RAS server using a
	user name and password that are setup for server callback with the phone number
	"Preset" by the administrator, the RAS client receives the following error
	message:
	
	  error 734: The PPP link control protocol terminated
	
	The RAS client receives the error message after the server hangs up to call back,
	and the client never receives a callback from the server.
	
	MORE INFORMATION
	================
	
	There is an option in the RAS client phone book, network settings, called
	"Request LCP Extensions" that MUST be checked in order for callback to work
	properly. This box is checked by default.
	
	The following information on LCP Extensions is from the RAS Help file:
	
	  The Request LCP extensions (RFC 1570) check box enables newer PPP features.
	  These extensions may cause problems when calling servers with older PPP
	  software. Clear the Request LCP extensions (RFC 1570) check box only if
	  consistent problems occur.
	
	  Clearing the checkbox prevents LCP from sending Time-Remaining and
	  Identification packets and requesting callback during the LCP negotiation of
	  PPP.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
