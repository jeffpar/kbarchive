---
layout: page
title: "Q166874: No Crashdump and Compaq Systems with Smart-2/P (PCI) Controller"
permalink: /kb/166/Q166874/
---

## Q166874: No Crashdump and Compaq Systems with Smart-2/P (PCI) Controller

{% raw %}

	Article: Q166874
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdpartykbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On Compaq systems running a Smart-2/P (PCI) controller as the boot device, a
	blue screen error may not generate a crashdump file. This occurs even though the
	crashdump requirements are met.
	
	CAUSE
	=====
	
	Compaq 1500 and 5000 systems frequently run a Smart-2/P (PCI) controller to
	control the disk drive containing the Windows NT boot partition. A special
	Windows NT function call contained in the PCI Find Adapter routine returns an
	error condition when called at crashtime. As a result of this, the PCI Smart-2/P
	adapter is not found to be present at crashtime and no crashdump file is
	generated.
	
	RESOLUTION
	==========
	
	A new version of Cpqarray.sys is available to correct this problem. Compaq has
	included this hotfix in their Softpaq - SP2746.exe. They have also indicated
	that it will be incorporated in the upcoming SSD 1.21 release.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 4.0
	
	======================================================================
	Keywords          : kb3rdparty kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
