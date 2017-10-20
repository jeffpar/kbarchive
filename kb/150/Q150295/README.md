---
layout: page
title: "Q150295: Group Names and Using NET GROUP Utility"
permalink: /kb/150/Q150295/
---

## Q150295: Group Names and Using NET GROUP Utility

{% raw %}

	Article: Q150295
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the NET GROUP command line utility and one of your groups has a
	space in its name, you receive the following message:
	
	  The syntax of this command is:
	
	  NET GROUP [groupname [/COMMENT:"text"]][/DOMAIN]
	
	            groupname </ADD [/COMMENT:"text"] | /DELETE> [/DOMAIN]
	            groupname username [...] </ADD | /DELETE> [/DOMAIN]
	
	MORE INFORMATION
	================
	
	If a group name has a space in it, for example Domain Admins, you need to
	specify the group name inside quotation marks ("Domain Admins"). Use the
	following syntax to view the user names associated with the group:
	
	1. Open an MS-DOS prompt.
	
	2. Type NET GROUP "Domain Admins"
	
	3. The following information will be displayed:
	
	  Group Name        Domain Admins
	  Comment           Designated administrators of the domain
	  Members
	  -------------------------------------------------------------------
	  Administrator
	  The command completed successfully.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
