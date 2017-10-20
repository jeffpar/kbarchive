---
layout: page
title: "Q87417: PC DB: Rebuilding an MBG File"
permalink: /kb/087/Q87417/
---

## Q87417: PC DB: Rebuilding an MBG File

{% raw %}

	Article: Q87417
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is very difficult to rebuild an MBG file. The file is not encrypted and the
	contents of the mail headers can be read. To rebuild an MBG file, it would be
	necessary for the recovered headers to align on 116-byte boundaries and the
	proper MAI filename to be in the correct location. The matching KEY file would
	have to be synchronized to the rebuilt MBG file. This process would be
	completely manual, because there is no utility to help recover the header
	information.
	
	In most cases, the only solution is to restore from a backup file. Microsoft does
	not recommend rebuilding an MBG file unless no backups are available, and the
	mail is too important to lose.
	
	
	Additional query words: 2.10e 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.2
	
	=============================================================================
	

{% endraw %}
