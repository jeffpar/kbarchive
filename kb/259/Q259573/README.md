---
layout: page
title: "Q259573: BUG: SCSI Pass Through Fails with Invalid User Buffer Error"
permalink: /kb/259/Q259573/
---

## Q259573: BUG: SCSI Pass Through Fails with Invalid User Buffer Error

{% raw %}

	Article: Q259573
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:
	Operating System(s): 
	Keyword(s): kbDDK kbOSWin2000bug kbStorageDev kbDSupport kbGrpDSNTDDK
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Driver Development Kit (DDK) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use IOCTL_SCSI_PASS_THROUGH or IOCTL_SCSI_PASS_THROUGH_DIRECT, with the
	DataTransferLength member of the SCSI_PASS_THROUGH structure set to 1, the call
	fails with the following error message:
	
	  Error: 1784 The supplied user buffer is not valid for the requested
	  operation.
	
	CAUSE
	=====
	
	The Scsiport.sys driver checks the validity of the user buffer that is sent by
	the application. This test fails if the value of DataTransferLength is set to 1,
	and therefore the ScsiPort driver fails this call.
	
	RESOLUTION
	==========
	
	As a temporary workaround, set DataTransferLength to a value other than 1.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This call fails only in Windows 2000.
	
	REFERENCES
	==========
	
	See the Windows 2000 DDK documentation.
	
	Additional query words: IOCTL_SCSI_PASS_THROUGH SCSI passthrough
	
	======================================================================
	Keywords          : kbDDK kbOSWin2000bug kbStorageDev kbDSupport kbGrpDSNTDDK 
	Component         : DDK Drivers,IDE Drivers,SCSI
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbwin2000DDK kbAudDeveloper kbWinDDKSearch kbWinAdvServSearch
	Version           : WINDOWS:; winnt:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
