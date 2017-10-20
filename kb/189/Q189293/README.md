---
layout: page
title: "Q189293: XADM: 4GT RAM Tuning Using Windows NT Server Enterprise Edition"
permalink: /kb/189/Q189293/
---

## Q189293: XADM: 4GT RAM Tuning Using Windows NT Server Enterprise Edition

{% raw %}

	Article: Q189293
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The information store (Store.exe) and the directory service (Dsamain.exe) have
	been compiled to make use of up to 3 gigabytes (GB) of addressable memory per
	process when 4GT RAM Tuning is enabled in Microsoft Windows NT Server Enterprise
	Edition.
	
	4GT RAM Tuning reallocates RAM within the 4-GB address space of Windows NT Server
	from the operating system to memory-intensive programs. If you use 4GT RAM
	Tuning, a memory-intensive program can use up to 3 GB of RAM (which is a 50
	percent increase over the base Windows NT Server product) so that more data is
	cached and performance is increased.
	
	This feature benefits programs (such as Exchange Server) that run on powerful
	computers with more than 2 GB of physical RAM and that can take advantage of a
	larger address space.
	
	Windows NT Server Enterprise Edition supports 4GT RAM Tuning on Intel
	architecture servers only.
	
	MORE INFORMATION
	================
	
	After you install Windows NT Server Enterprise Edition, you must modify the
	Boot.ini file to enable 4GT RAM Tuning. To enable 4GT RAM Tuning, add the /3GB
	parameter to the startup line.
	
	NOTE: This change is only effective if you are using Windows NT Server Enterprise
	Edition. On standard Windows NT, this flag relocates the kernel, but programs
	are unable to access more than 2 GB.
	
	For example:
	
	   [boot loader]
	   timeout=30
	   default=multi(0)disk(0)rdisk(0)partition(2)\WINNT
	   [operating systems]
	   multi(0)disk(0)rdisk(0)partition(2)\WINNT="Windows NT Server Version 4.00"
	   /3GB
	   multi(0)disk(0)rdisk(0)partition(2)\WINNT="Windows NT Server Version 4.00
	   [VGA mode]" /basevideo /sos
	
	NOTE: Some of the preceding lines are wrapped for readability.
	
	For additional information about 4GT RAM Tuning in Windows NT Server Enterprise
	Edition, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q171793 Information on Application Use of 4GT RAM Tuning
	
	Additional query words: scalability Windows NT Server/E 4GT
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : :4.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
