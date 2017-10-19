---
layout: page
title: "Q152986: CSNW Does Not Report Directory Restrictions"
permalink: /kb/152/Q152986/
---

## Q152986: CSNW Does Not Report Directory Restrictions

	Article: Q152986
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	NetWare has the ability to restrict the space that a directory can occupy on a
	volume. This is not a volume level restriction and is not set on a per user
	basis. If a user connects to a NetWare server through Client Services for
	NetWare (CSNW), they will see the entire free space of the volume returned by
	File Manager and DIR, even if the directory they are viewing has been
	restricted.
	
	CAUSE
	=====
	
	Windows NT does not support directory space restrictions.
	
	WORKAROUND
	==========
	
	If the user connects directly to the directory in question, Windows NT will
	return the restricted size. For example:
	
	Instead of:    NET USE F: \\NWSERVER\SYS
	        CD \APPS
	        DIR
	
	Use:        NET USE F: \\NWSERVER\SYS\APPS
	        DIR
	
	This will work as long as the volume is less than 2 gigabytes (GB) in size. If
	the volume is larger than 2 GB, Windows NT will still return the total free
	space.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51>.
	This problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt CSNW GSNW NETWARE NOVELL
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
