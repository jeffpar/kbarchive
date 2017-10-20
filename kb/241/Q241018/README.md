---
layout: page
title: "Q241018: Microsoft Windows NT Workstation 4.0 Resource Kit Corrections"
permalink: /kb/241/Q241018/
---

## Q241018: Microsoft Windows NT Workstation 4.0 Resource Kit Corrections

{% raw %}

	Article: Q241018
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Workstation 4.0 Resource Kit ISBN 1-57231-343-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Windows NT Workstation 4.0
	Resource Kit, ISBN 1-57231-343-9.
	
	The following topics are covered:
	
	- Page 1009: Multihomed Device Example Is Incorrect
	
	- Page 1070: Note Should Read Server Not Workstation
	
	MORE INFORMATION
	================
	
	Page 1009: Multihomed Device Example Is Incorrect
	-------------------------------------------------
	
	On page 1009, the example for using the #MH keyword in the LMHOSTS doesn't use
	the keyword #MH. You should also have different IP addresses for the two network
	adapters.
	
	Change:
	102.54.94.91 accounting #accounting server NIC 1
	102.54.94.91 accounting #accounting server NIC 2
	
	To:
	102.54.94.91 accounting #MH #accounting server NIC 1
	102.54.95.91 accounting #MH #accounting server NIC 2
	
	
	Page 1070:  Note Should Read Server Not Workstation
	---------------------------------------------------
	
	On page 1070, in the note, change both occurrences of Windows NT Workstation
	Resource Kit, to Windows NT Server Resource Kit.
	
	As noted in the README.wri file on the Windows NT Workstation Resource Kit
	CD-ROM, Crystal Reports Event Log Viewer is included only on the Windows NT
	Server Resource Kit.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 1-57231-343-9 RKBOOK
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
