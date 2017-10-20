---
layout: page
title: "Q100425: Recovering DBLSPACE.00n After CHKDSK /F"
permalink: /kb/100/Q100425/
---

## Q100425: Recovering DBLSPACE.00n After CHKDSK /F

{% raw %}

	Article: Q100425
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After performing standard troubleshooting for a damaged DoubleSpace compressed
	volume file (CVF), it may be possible to recover some or all of the information
	by running CHKDSK /F.
	
	MORE INFORMATION
	================
	
	Depending on the severity of the damage, running CHKDSK /F on the affected drive
	may create .CHK extension files that may be mountable. However, if DBLSPACE.00n
	is still present, it is likely that the .CHK files are not part of the original
	CVF. If it is determined that extremely large .CHK file(s) do exist on the
	affected drive and DBLSPACE.00n is no longer present, do the following:
	
	1. Rename the .CHK file(s) to DBLSPACE.00n. To do this, type the following at
	  the MS-DOS command prompt and then press ENTER:
	
	  " ren c:\file000n.chk c:\dblspace.000 " (without the quotation marks)
	
	2. Insert MS-DOS 6.0 Disk 3 (3.5-inch) or Disk 4 (5.25-inch), and type the
	  following at the MS-DOS command prompt, and then press ENTER:
	
	  " expand a:dblspace.ex_ c:\dblspace.exe " (without the quotation marks)
	
	3. Remove all floppy disks, reboot, then type the following at the MS-DOS
	  command prompt and press ENTER:
	
	  " c:\dblspace /mo=00n " (without the quotation marks)
	
	NOTE: Alternatively, you can run DBLSPACE.EXE, choose Mount from the Drive menu,
	and try to mount C:\DBLSPACE.00n.
	
	Additional query words: tshoot 6.00 double space check disk
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
