---
layout: page
title: "Q112916: PC Adm: Postoffice Database Storage Status Totals"
permalink: /kb/112/Q112916/
---

## Q112916: PC Adm: Postoffice Database Storage Status Totals

{% raw %}

	Article: Q112916
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The postoffice storage status displays file space in bytes. These byte totals
	are not for the bytes occupied by the file; they are for the blocks allocated
	for the file.
	
	The totals listed in the Mail Administrator program (when you select Local-Admin,
	Storage, Status) are generated in the following manner:
	
	- The byte total for File Space Used for Mailbags is the sum of the blocks used
	  by the .MBG and .KEY files.
	
	- The total for Number of Mail Messages is the number of files with .MAI and
	  .ATT extensions.
	
	- The byte total for File Space Used for Mail Messages is the sum of the blocks
	  used by the .MAI and .ATT files.
	
	Additional query words: 1.00 1.10 admin admin.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.0a,3.2
	
	=============================================================================
	

{% endraw %}
