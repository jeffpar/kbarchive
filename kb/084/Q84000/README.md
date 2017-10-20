---
layout: page
title: "Q84000: Obtaining a Virtual Device (VxD) ID Number"
permalink: /kb/084/Q84000/
---

## Q84000: Obtaining a Virtual Device (VxD) ID Number

{% raw %}

	Article: Q84000
	Product(s): Microsoft Windows Device Driver Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbDDK
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Device Development Kit (DDK) for Windows, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DECLARE_VIRTUAL_DEVICE line of every virtual device (VxD) used in the
	Microsoft Windows graphical environment contains a VxD identifier (ID) field.
	This field contains either the unique number assigned to that virtual device or
	the constant Undefined_Device_ID.
	
	While most virtual devices can use the Undefined_Device_ID, certain virtual
	devices must a have unique identifier. A VxD that calls an MS-DOS device or a
	terminate-and-stay-resident (TSR) program must have an ID. An ID is also
	required for a VxD that provides any of the following:
	
	- A service or services
	
	- A V86-mode application programming interface (API)
	
	- A protected-mode API
	
	Windows does not prevent a VxD that uses the Undefined_Device_ID from loading
	more than once in a given Windows session. As Windows loads, it retrieves a list
	of all virtual devices to load by sending the Interrupt 2Fh Function 1605h
	broadcast and checking the SYSTEM.INI file. If a VxD is specified more than once
	and it uses the Undefined_Device_ID, it is loaded multiple times. However, if
	the VxD has its own unique ID, Windows recognizes the situation, informs the
	user, and aborts the loading process (unless the VxD contains code to address
	this situation and allow Windows to continue).
	
	Microsoft uses the V*D.386 naming convention for the VxDs provided with Windows
	where the "*" names the device virtualized by the VxD. Other VxD vendors should
	use a different naming convention; preferably one that incorporates the company
	name. The resulting name should be as mnemonic as possible.
	
	To obtain a unique VxD ID, complete the form below and return it to Microsoft
	through electronic mail. Send completed forms to:
	
	  vxdid@microsoft.com
	
	This address is valid for any electronic mail service with Internet access.
	
	Some systems require an address prefix to connect to Internet. For example,
	electronic mail on the CompuServe system should be addressed as follows:
	
	  >INTERNET:vxdid@microsoft.com
	
	You may also use a Service Request (SR) to obtain a VxD ID, but be aware that
	your service contract will be decremented for an instance, even if you are only
	using the SR to obtain a unique VxD ID.
	
	NOTE: Microsoft no longer accepts FAXED or Postal-Mailed ID requests.
	
	NOTE: The method of using OEM numbers documented on page 17-5 of the "Microsoft
	Windows Device Development Kit Virtual Device Adaptation Guide" manual for
	version 3.0 of the Microsoft Windows Device Development Kit (DDK) is no longer
	correct. VxD ID numbers are assigned on a per-VxD basis. Microsoft will assign a
	unique number for each VxD you write; OEM ID numbers, which can be used for up
	to 32 VxDs, are not assigned.
	
	MORE INFORMATION
	================
	
	Virtual Device ID Request
	-------------------------
	
	  Contact Name(s):
	  Phone Number(s):
	  CompuServe ID or Microsoft Support Advantage Account Number(s): Internet
	  Electronic Mail Address:
	
	  Company Name:
	  Address:
	  Address:
	  City/State/Zip:
	  Country:
	
	  Number of VxDs planned:
	
	  Provide the following information for each virtual device planned:
	
	  VxD Filename: ________.386 Virtual __________ Device
	
	  Will this VxD be loaded from TSR? (Yes/No):
	  Will this VxD call out to an MS-DOS TSR/device driver through the "Interrupt
	  2Fh call out" (Interrupt 2Fh, Function 1607h)? (Yes/No):
	
	  Estimate the number of Virtual-8086 (V86) functions exported:
	  PM functions exported:
	  VxD Services:
	
	  If this VxD replaces a "standard" VxD, which one does it replace:
	
	  Summarize the purpose of this VxD:
	
	  Summarize the technical attributes of this VxD (interrupts hooked, I/O ports
	  trapped, and so forth):
	
	  In what way or with what products will this VxD be distributed?
	
	  Will the functions or services of this VxD be documented for others to call?
	
	Additional query words: 3.00 3.10 DDKVXD
	
	======================================================================
	Keywords          : kb16bitonly kbDDK 
	Technology        : kbAudDeveloper kbWin3xSearch kbWinDDKSearch kbWinDDK300 kbWinDDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
