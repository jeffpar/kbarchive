---
layout: page
title: "Q142608: Windows for Workgroups Fails to Print to Apple IIG through NTS"
permalink: /kb/142/Q142608/
---

## Q142608: Windows for Workgroups Fails to Print to Apple IIG through NTS

{% raw %}

	Article: Q142608
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Windows for Workgroup client sends a print job to Windows NT print queue
	servicing an Apple IIG or a Hewlett-Packard (HP) LaserJet 4, no output may be
	seen or an error may print on the print job.
	
	CAUSE
	=====
	
	Windows for Workgroups sends a CTRL-D at the beginning of the print job. Some
	printers such as the Apple IIG and the HP LaserJet 4 do not recognize the CTRL-D
	at the beginning of the print job.
	
	RESOLUTION
	==========
	
	To workaround this issue, choose another printer to print from the Windows for
	Workgroup client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	3.51. This problem was corrected in the latest Microsoft Windows NT 3.51 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words: 3.51 prodnt EOF End Of File printing
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
