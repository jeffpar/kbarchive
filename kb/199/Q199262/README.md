---
layout: page
title: "Q199262: SMS: Remote Control Compression Levels in SMS 2.0"
permalink: kb/199/Q199262/
---

## Q199262: SMS: Remote Control Compression Levels in SMS 2.0

	Article: Q199262
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbConfig kbsms200 smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server 2.0 offers three options for configuring Data
	Compression levels for the Remote Tools client agent. These options are set in
	the Remote Tools client agent properties and are as follows.
	
	- Low-Compression uses the run length encoding (RLE) algorithm for data
	  compression. This method offers a compression level of approximately 40
	  percent. This setting is recommended for client computers that have CPUs
	  slower than a 100 MHz-Pentium processor or if the network connections are
	  fast and bandwidth is not an issue. Using this setting allows the client
	  computer to be more responsive during a remote control session because the
	  processor does not have the extra overhead of data compression.
	
	- High-Compression uses the Lempel-Ziv (LZ) algorithm for data compression.
	  This method offers a compression level of approximately 90 percent. This
	  setting is recommended only for client computers with at least a 100-MHz
	  Pentium processor because of the overhead of this level of data compression.
	
	- Automatic Compression Level Selection selects the compression method by
	  determining what type of CPU the client computer has. If the CPU is at least
	  a 100-MHz Pentium processor, Lempel-Ziv (LZ) is used. Otherwise, run length
	  encoding is used.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbsms200 smsconfig 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
