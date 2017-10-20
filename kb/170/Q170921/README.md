---
layout: page
title: "Q170921: Scaling Windows NT Server Storage and Fault Tolerance"
permalink: /kb/170/Q170921/
---

## Q170921: Scaling Windows NT Server Storage and Fault Tolerance

{% raw %}

	Article: Q170921
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup kbhowto
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses using Windows NT Server's software fault tolerance
	capabilities to scale invested hardware to meet current and future storage
	demands. Note that these capabilities are not as fast or dependable as hardware
	fault tolerance but can help extend existing hardware functionality.
	
	This article is primarily for systems administrators who have installed systems
	that use hardware RAID arrays and who want to combine two or more hardware RAID
	arrays as one functional logical drive to expand space, improve performance, and
	extend the usefulness of existing hardware investments.
	
	MORE INFORMATION
	================
	
	Scaling multiple RAID arrays can exceed the bandwidth of the BUS that the SCSI
	controllers are using, so knowledge of SCSI capacity planning is assumed in this
	article.
	
	For more information regarding SCSI capacity planning, please see the Microsoft
	TechNet article "SCSI: Hardware Performance Considerations for Win95/NT" under
	Hardware/Hardware Products Architecture.
	
	IMPORTANT! Introducing Windows NT's software fault tolerance requires that you
	keep a valid copy of the DISK key by either having current backups of the
	registry and a recent emergency repair disk, or using the Disk Administrator's
	Partition/Configuration/Save option to set up a valid DISK key backup.
	
	SCALING METHODS:
	
	NT Mirroring Hardware Stripe Sets (sometimes referred to as RAID 10)
	--------------------------------------------------------------------
	
	Disk0---(Stripe)----DiskX
	     ^
	     |   (mirrored)
	     v
	Disk0---(Stripe)----DiskX
	
	Pros: The fastest RAID array method; excellent read and write speed.
	
	Cons: Mirroring provides the minimum FT required. Any corruption of the data may
	replicate to the shadow set. This provides no integrity protection for the drive
	arrays because they are running a stripe set underneath. Any drive failure would
	render the one of the arrays offline.
	
	H/W RAID-5 Arrays in NT Volume Set
	----------------------------------
	
	Disk0---Disk1---Disk2---DiskX (Hardware RAID 5 array)  member-1
	     (NT Volume Set)
	Disk0---Disk1---Disk2---DiskX (Hardware RAID 5 array)  member-2
	
	Pros: Allows very large logical drives with RAID 5 fault tolerance underneath to
	protect the volume set. Allows two dissimilar RAID 5 arrays to be grouped
	together. This allows you to concentrate on the size of the logical driver
	rather than on performance.
	
	Cons: Performance of the RAID arrays is not combined as RAID 10. This gives the
	least-optimal performance of all the configurations. Additionally, the logical
	or physical loss of one member results in the total loss of the entire volume
	set.
	
	NT Mirroring of H/W RAID-5 Sets
	-------------------------------
	
	Disk0---Disk1---Disk2---DiskX (Hardware RAID-5 array)
	     ^
	     |   (mirrored)
	     v
	Disk0---Disk1---Disk2---DiskX (Hardware RAID-5 array)
	
	Pros: Very good read performance; good write performance. Both the data and drive
	arrays have fault tolerance.
	
	Cons: Any corruption of the data could be replicated to the shadow drive. Very
	costly due to duplicate hardware requirements.
	
	NT RAID-5 on Multiple H/W RAID-5 Arrays
	---------------------------------------
	
	Disk0--Disk1--DiskX (H/W RAID-5 array)\ 
	Disk0--Disk1--DiskX (H/W RAID-5 array) |-RAID-5 created in Disk Admin.
	Disk0--Disk1--DiskX (H/W RAID-5 array)/ 
	
	Pros: Excellent read speeds; good write speed. This is the one of the best
	combinations of speed and security. The array and the data have the benefit of
	RAID protection.
	
	Cons: The number of h/w RAID arrays required to make this efficient is a
	disadvantage. Three RAID-5 arrays in a soft RAID-5 would lose one-third total
	space to parity. Generally desirable would be four or five arrays to make the
	parity space required more reasonable (one-fourth or one-fifth total space).
	
	
	Additional query words: prodnt scale fault tolerance
	
	======================================================================
	Keywords          : kbsetup kbhowto 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
