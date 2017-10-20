---
layout: page
title: "Q219428: Cluster Server Returns SCSI Port Errors After Installing SP3"
permalink: /kb/219/Q219428/
---

## Q219428: Cluster Server Returns SCSI Port Errors After Installing SP3

{% raw %}

	Article: Q219428
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP3 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 3 (SP3) on a computer with an
	Adaptec 78xx SCSI controller installed, one or more of the following Event IDs
	may be displayed in your System Event log.
	
	- Event ID 9 - "Device\SCSIportX did not respond within the timeout period."
	
	- Event ID 11 - "The driver detected a controller error on \Device\SCSIPortX."
	
	- Event ID 15 - "Device\SCSIportX not ready for access."
	
	You may also experience a noticeable performance loss in read/write operations to
	the devices on the SCSI controller.
	
	CAUSE
	=====
	
	This behavior occurs because the Adaptec 78xx SCSI driver version 4.0.1433.1 may
	have been overwritten by version 2 drivers from Service Pack 3 for the follwing
	SCSI cards:
	
	- 290x
	
	- 291X
	
	- 294x
	
	- 394x
	
	- 4944
	
	In addition, termination of the SCSI devices may not be configured properly.
	
	RESOLUTION
	==========
	
	To resolve this problem, reapply the latest driver for your Adaptec 290x, 291X,
	294x, 394x, or 4944 SCSI card after you apply SP3. If you are just adding a new
	controller, verify proper termination per manufacturer specifications.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q154690 How to Troubleshoot Event 9 and 11 Error Messages
	
	You can also visit Adaptec's Web site at:
	
	  http://www.adaptec.com/ (http://www.adaptec.com/)
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp3 kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0,4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
