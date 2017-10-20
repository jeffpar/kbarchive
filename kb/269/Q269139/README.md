---
layout: page
title: "Q269139: Windows 2000 TCP/IP Protocols and Services Technical Reference C"
permalink: /kb/269/Q269139/
---

## Q269139: Windows 2000 TCP/IP Protocols and Services Technical Reference C

{% raw %}

	Article: Q269139
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 13-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 TCP/IP Protocols and Services Technical Reference ISBN 0-7356-0556-4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Windows 2000 TCP/IP Protocols and
	Services Technical Reference, ISBN 0-7356-0556-4.
	
	The following topics are covered:
	
	- Page 69: Incorrect Information About Defending Node's ARP Request
	
	- Page 122: Binary Number Should End With 1 Not 0
	
	- Page 146: Change 172.16.1.19 To 172.16.1.99
	
	- Page 467: Incorrect Reference To Appendix Folder
	
	MORE INFORMATION
	================
	
	Page 69: Incorrect Information About Defending Node's ARP Request
	-----------------------------------------------------------------
	
	On page 69, in lines 4 and 5,
	
	Change:
	"The defending node's ARP Request contains the SHA set to the offending node's
	MAC address."
	
	To:
	"The defending node's ARP Request contains the SHA set to the defending node's
	MAC address."
	
	
	Page 122:  Binary Number Should End With 1 Not 0
	------------------------------------------------
	
	On page 122, in Table 5-9, in row 1, the binary number should end with 1, not 0.
	
	Change:
	10000011.01101011.00000000.00000000
	
	To:
	10000011.01101011.00000000.00000001
	
	
	Page 146: Change 172.16.1.19 To 172.16.1.99
	-------------------------------------------
	
	On page 146, in the "actives route" table, correct the second to last entry as
	follows.
	
	Change:
	
	224.0.0.0    224.0.0.0    172.16.1.19     172.16.1.19
	
	To:
	
	224.0.0.0    224.0.0.0    172.16.1.99     172.16.1.99
	
	
	Page 467: Incorrect Reference To Appendix Folder
	------------------------------------------------
	
	The companion CD of the book does not contain a \Appendix folder. Please remove
	the following references on page 467:
	
	Under "FTP Commands":
	"Client commands and Windows 2000 FTP server-recognized commands can be found in
	the \Appendix folder of the companion CD-ROM."
	
	Under "FTP Replies":
	"These codes are extensible, and a listing of specific codes and their meanings
	may be found in the \Appendix folder of the companion CD-ROM."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: TKBOOK WIN2000 0-7356-0556-4
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
