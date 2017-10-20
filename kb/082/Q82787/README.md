---
layout: page
title: "Q82787: Meaning of LocalTSRs= in SYSTEM.INI"
permalink: /kb/082/Q82787/
---

## Q82787: Meaning of LocalTSRs= in SYSTEM.INI

{% raw %}

	Article: Q82787
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows version 3.1, the SYSTEM.INI file [NonWindowsApp] switch, LocalTSRs=,
	provides for a unique copy of terminate-and- stay-resident (TSR) programs
	(already loaded before Windows is started) in each virtual machine (VM) under
	the 386 enhanced mode of Windows.
	
	MORE INFORMATION
	================
	
	Many non-Windows-aware TSR programs that are loaded prior to starting Windows
	have problems when they are called in different VMs. For instance, many MS-DOS
	line-editor TSRs (such as DOSEDIT) assume that there is only one keyboard buffer
	rather than an independent buffer for each VM. When these types of programs are
	called in different VMs they can cause problems. They may reference a location
	in memory that does not exist in a VM or they may return data that is valid in
	one VM but not in the VM for which the call was made. To correct this, 386
	enhanced mode will makes a unique copy of the code and data associated with the
	TSR, assuring that the assumptions made by the TSR of only one environment are
	valid in others since there is a unique TSR for each environment.
	
	There are some TSRs for which this method of creating uniqueness is not
	sufficient. Most prominently, network-service provider TSRs are very intimate
	with MS-DOS (directly modifying MS-DOS internal structures that are common
	across all VMs) and so must be handled by a more sophisticated virtual device
	driver. Additionally, it is more memory efficient to use a virtual device driver
	to regulate access to a TSR if the only problem is that the TSR cannot be
	reentered in multiple VMs.
	
	Additionally, some TSRs may only need a very small portion of the data of the TSR
	to be unique in each VM. Using a virtual device driver to make only the required
	data unique may reduce memory requirements and make switching between VMs
	faster. Using a virtual device driver, however, requires intimate knowledge of
	the TSR and how to develop a virtual device driver.
	
	Additional query words: 3.10 3.1 VxD winfest
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
