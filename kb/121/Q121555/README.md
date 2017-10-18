---
layout: page
title: "Q121555: Compression Performance Tuning in Systems Management Server"
permalink: kb/121/Q121555/
---

## Q121555: Compression Performance Tuning in Systems Management Server

	Article: Q121555
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2,2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smshowto smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The process of creating a data-compressed package (*.PKG) to be transmitted
	through a Systems Management Server sender involves intense use of the Central
	Processing Unit (CPU) for the data-compression algorithm. The frequency at which
	Systems Management Server will yield the CPU during compression can have a
	dramatic effect on performance; this article discusses this type of tuning.
	There are several Registry parameters for this purpose.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide issues
	that may require you to reinstall Microsoft Windows NT to correct them.
	Microsoft cannot guarantee that any issues resulting from the use of Registry
	Editor can be solved. Use this tool at your own risk.
	
	- During a package compression, a block of data is submitted to the compression
	  algorithm and this call returns a compressed block. A large number of these
	  calls can take a large amount of CPU time, so we have a timer that allows
	  Systems Management Server to yield the processor for the specified amount of
	  time. The default is 75 milliseconds. In addition, you can set a Registry
	  entry under:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Compression\ 
	
	     "Yield Time" (DWORD) [this is in milliseconds of yield time per
	     compression block]
	
	  If compression appears to monopolize your system, try setting this to 100 or
	  125. For systems with lots of RAM and CPU power, values of 1-20 might be
	  usable, and this would speed up compression somewhat.
	
	- There are 7 levels of compression (1 through 7); a level of 1 (default)
	  providing the least compression and greatest speed, and a level of 7
	  providing maximum compression and taking additional time. This value is
	  located at:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Compression\ 
	
	     "Compression Level" (DWORD)
	
	  In addition to the degree of compression desired, compression can be disabled
	  by setting the value below to "No". The default is "Yes".
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Compression\ 
	
	     "Enable Compression" (REG_SZ)
	
	  Two-to-three megabytes (M) of memory resource can be saved by disabling
	  compression; however, greater disk space will be required to store the
	  package files because they will not be compressed.
	
	- Decompression Buffer size:
	
	     HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Compression\ 
	
	     "Decompression Buffer Size (Log2 Value)" (DWORD)
	
	  This value specifies the number of buffers to be used when decompressing a
	  package file. It defaults to 15 and can be set to a value of 1 through 31;
	  however, for Systems Management Server version 1.0, values greater than 15
	  are ignored.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbConfig smshowto smsconfig 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120 kbSMS200
	Version           : :1.0,1.1,1.2,2.0
	
	=============================================================================
	
