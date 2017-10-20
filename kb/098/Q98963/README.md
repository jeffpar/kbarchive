---
layout: page
title: "Q98963: Mac Srv: Hardware Recommendations"
permalink: /kb/098/Q98963/
---

## Q98963: Mac Srv: Hardware Recommendations

{% raw %}

	Article: Q98963
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a hardware recommendation to assist customers of versions 3.0
	and 3.1 of Microsoft Mail for AppleTalk Networks in choosing hardware that will
	maximize the performance of your mail server.
	
	There are four major considerations that should be given when setting up a mail
	server. They are disk speed, network access, CPU and memory allocation.
	
	Disk Speed
	----------
	
	Disk speed is probably the most important consideration when assembling a
	dedicated production mail server. Microsoft Mail stores all information in a
	single combined file on the hard disk. Every time a user request is processed by
	the server it will more than likely result in a disk read or write. Seek time of
	the disk is more important than network transfer rate because all blocks of data
	that are needed will need to be sent across the network which would be slower
	than the transfer rate of the mail server. The assembly of those blocks can be
	done in a shorter time frame with a faster disk access time.
	
	NOTE: Network Managers should always ensure the most current disk drivers,
	appropriate disk interleaves, and correct SCSI terminations are being used to
	maximize performance.
	
	Network Access
	--------------
	
	The faster the network speed the better when considering a mail server. A mail
	server is only as fast as its slowest link. Most computers will process faster
	than the network can be read from or written to. Therefore, the faster that
	information is received and returned to the network, the faster the CPU can go
	on to processing user requests.
	
	CPU
	---
	
	The following table associates a range of recommended users with Apple CPUs. Your
	actual tolerance levels may be lower or higher depending on the amount of
	processing and physical configuration of the server.
	
	                                                    RECOMMENDED
	  CPU                           CHIP        CLOCK   USERS
	---------------------------------------------------------------------
	
	  Macintosh 128K                68000         8     5-25
	  Macintosh 512K                68000         8     5-25
	  Macintosh XL                  68000         5     5-15
	  Macintosh Plus                68000         8     5-25
	  Macintosh 512Ke               68000         8     5-25
	  Macintosh SE                  68000         8     5-25
	  Macintosh II                  68020        16     15-50
	  Macintosh IIx                 68030        16     20-80
	  Macintosh SE/30               68030        16     20-80
	  Macintosh IIcx                68030        16     20-80
	  Macintosh SE FDHD             68000         8     5-25
	  Macintosh IIci                68030        25     70-110
	  Macintosh Portable            68HC000      16     15-30
	  Macintosh IIfx                68030        40     120-170
	  Macintosh Classic             68000         8     5-25
	  Macintosh LC                  68020        16     15-50
	  Macintosh IIsi                68030        20     60-100
	  Macintosh Portable            68HC000      16     15-30
	  Macintosh Classic II          68030        16     20-80
	  Macintosh Quadra 700          68040        25     160-180
	  Macintosh Quadra 900          68040        25     160-180
	  Macintosh LC II               68030        16     20-80
	  Macintosh Quadra 950          68040        33     165-190
	  Performa 200                  68030        16     20-80
	  Performa 400                  68030        16     20-80
	  Performa 600                  68030        32     75-120
	  Macintosh IIvi                68030        16     20-80
	  Macintosh IIvx                68030        32     75-120
	  Macintosh Color Classic       68030        16     20-80
	  Macintosh LC III              68030        25     70-110
	  Macintosh Centris 610         68LC040      20     140-160
	  Macintosh Centris 650         68040        25     160-180
	  Macintosh Quadra 800          68040        33     165-190
	  Workgroup Server 60           68040        25     160-180
	  Workgroup Server 80           68040        33     165-190
	  Performa 405                  68030        16     20-80
	  Performa 430                  68030        16     20-80
	  Performa 450                  68030        25     70-110
	  Macintosh LC 520              68030        25     70-110
	  Macintosh Quadra 660AV        68040        25     160-180
	  Macintosh Quadra 840AV        68040        40     170-200
	  PowerBook 165                 68030        33     80-130
	  Performa 410                  68030        16     20-80
	  Performa 460                  68030        33     80-130
	  Performa 466                  68030        33     80-130
	  Performa 467                  68030        33     80-130
	  Performa 475                  68LC040      25     160-180
	  Performa 476                  68LC040      25     160-180
	  Performa 550                  68030        33     80-130
	  Macintosh Color Classic II    68030        33     80-130
	  Macintosh LC 475              68LC040      25     160-180
	  Macintosh Quadra 605          68LC040      25     160-180
	  Macintosh Quadra 610          68040        25     160-180
	  Macintosh Quadra 650          68040        33     165-190
	  Performa 560                  68030        33     80-130
	  Macintosh LC 550              68030        33     80-130
	  Macintosh LC 575              68LC040      33     165-190
	  Power Macintosh 6100/60       PowerPC 601  60     160-180
	  Power Macintosh 6100/60AV     PowerPC 601  60     160-180
	  Power Macintosh 7100/66       PowerPC 601  66     160-180
	  Power Macintosh 7100/66AV     PowerPC 601  66     160-180
	  Power Macintosh 8100/80       PowerPC 601  80     160-180
	  Power Macintosh 8100/80AV     PowerPC 601  80     160-180
	  Performa 575                  68LC040      33     165-190
	  Performa 577                  68LC040      33     165-190
	  Performa 578                  68LC040      33     165-190
	  Workgroup Server 6150         PowerPC 601  60     160-180
	  Workgroup Server 8150         PowerPC 601  80     160-180
	  Workgroup Server 9150         PowerPC 601  80     160-180
	
	If your CPU is not listed, match the closest clock speed and chip set to
	determine recommended user limits.
	
	Memory Allocation
	-----------------
	
	While memory is important, it is not as critical as the above three items. Server
	memory settings typically need to be set higher on larger installations of mail
	as the server must merge huge lists of users from other servers. Servers will
	not utilize "excess" memory allocation. However to ensure a smooth running
	server, allocating higher amounts of RAM than expected will improve reliability
	of the server.
	
	The above information is only basic recommendations to help you to assemble the
	ideal server for your network. They are not concrete numbers. For more
	information on these guidelines, contact Microsoft Product Support Services.
	
	
	Additional query words: 3.00 3.10 macintosh system configuration information
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
