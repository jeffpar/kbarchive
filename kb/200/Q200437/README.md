---
layout: page
title: "Q200437: SMS: Status MIFs Are Generated with .MIF.MIF Extension"
permalink: /kb/200/Q200437/
---

## Q200437: SMS: Status MIFs Are Generated with .MIF.MIF Extension

	Article: Q200437
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms120 kbsmsInst
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Systems Management Server Installer version 1.0.45 to create a
	status MIF and specify the MIF file name as MyFile.mif, the resulting MIF file
	might be saved as MyFile.mif.mif. This only occurs with executables compiled as
	True Win32. Executables compiled as WIN16/WIN32 do not add the extra .mif
	extension to the output file.
	
	If you specify the MIF file without the .mif extension, you create the correct
	MyFile.mif.
	
	WORKAROUND
	==========
	
	To work around this problem when you compile as True Win32, remove the .mif
	extension when you specify the Install MIF Filename in the SMS tab of the
	Installation Properties dialog box. SMS Installer adds the .mif extension to the
	base file name and generates a valid MIF file name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0. This problem was corrected in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms swdist32
	
	======================================================================
	Keywords          : kbsms200 kbsms120 kbsmsInst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
