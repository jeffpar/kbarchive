---
layout: page
title: "Q171794: Migrate On/Off Does Not Allow Overwriting Static &lt;1Ch&gt; Mappings"
permalink: /kb/171/Q171794/
---

## Q171794: Migrate On/Off Does Not Allow Overwriting Static &lt;1Ch&gt; Mappings

	Article: Q171794
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The static <1Ch> entries in your Windows Internet Name Service (WINS)
	servers are not being overwritten by dynamic entries, even though you have
	Migrate on/off enabled.
	
	RESOLUTION
	==========
	
	To resolve this problem, manually delete the static mappings using one of the
	following methods:
	
	- Delete the static mapping entries by using WINS Manager:
	
	  1. From the Mappings menu, click Static Mappings.
	
	  2. Click the appropriate mapping, and then click Delete Mapping.
	
	  3. Click Yes to confirm the deletion.
	
	- Use the Winscl tool that is included in the Microsoft Windows NT 4.0 Resource
	  Kit. Refer to the online help for Winscl, by typing "winscl.exe /?" (without
	  the quotation marks) at a command prompt.
	
	After you remove the static entries, you need to restart the domain controllers
	for the domain or the entries are not refreshed until half of the domain
	controllers' renewal interval with WINS.
	
	NOTE: This is especially important in the case of <1Ch> entries, because
	these entries are queried by clients requesting domain controllers for domain
	logon validation. If clients are unable to obtain a list of domain controllers
	from WINS they may receive a "domain controller not found" error message, and in
	many cases, they may lose access to domain resources.
	
	STATUS
	======
	
	This problem was first corrected in Microsoft Windows NT 4.0 Service Pack 4.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q199159 Replacing a WINS Static 1c with a Dynamic Entry with Windows NT 4.0
	  SP4
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
