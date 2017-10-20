---
layout: page
title: "Q130939: Allowing Macintosh Connection to LAN Manager BDC as Guest"
permalink: /kb/130/Q130939/
---

## Q130939: Allowing Macintosh Connection to LAN Manager BDC as Guest

{% raw %}

	Article: Q130939
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you add the first Windows NT 3.5 or Windows NT 3.51 server into a existing
	LAN Manager domain, it must be the primary domain controller (PDC). Because the
	Windows NT server guest account is disabled by default, any LAN Manager backup
	domain controllers (BDCs) or member servers guest accounts will also be disabled
	when the user databases synchronize. Due to this, Macintosh users that connect
	to LAN Manager servers as a guest will no longer be able to do so.
	
	MORE INFORMATION
	================
	
	To allow Macintosh users to continue using the guest account on a LAN Manager
	server:
	
	1. Add the following to the LANMAN.INI file:
	
	     [MACFILE]
	     macguest = <a user name you will create on the Windows NT server that
	                has a blank password>
	
	2. At the Windows NT PDC, run User Manager and create the user you specified as
	  macguest on the LAN Manager server. This user must have a blank password.
	  Make the user a member of the Guest and Domain Guest groups with the Domain
	  Guest group as the default group.
	
	3. On the LAN Manager server stop and then restart the MACFILE service.
	
	4. Shutdown and restart your Macintosh.
	
	5. Select the LAN Manager server in the Macintosh's Chooser.
	
	6. Select the Guest logon option and choose OK. The list of LM Mac Volumes will
	  appear.
	
	Additional query words: prodnt sfm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
