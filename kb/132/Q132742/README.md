---
layout: page
title: "Q132742: PC Gen: Microsoft Windows NT 3.51 and Compressed Mail Files"
permalink: kb/132/Q132742/
---

## Q132742: PC Gen: Microsoft Windows NT 3.51 and Compressed Mail Files

	Article: Q132742
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2; :3.51; winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you view compressed files on a Microsoft Windows NT version 3.51 server
	volume from either File Manager or the Command Prompt, the file size displayed
	is the uncompressed size of the file. This is the size that should be used to
	check the file for possible corruption.
	
	MORE INFORMATION
	================
	
	File Manager displays compressed files and directories with blue text.
	
	COMPACT.EXE is a file compression utility shipped with Microsoft Windows NT
	version 3.51. It compresses files only on a NTFS partition.
	
	To view the compressed size of the file, you must select the file in File
	Manager. Then from the File menu, choose Properties.
	
	Any user that has at least Read and Write permission can use File Manager or
	COMPACT.EXE to compress and uncompress files and directories on a NTFS
	partition.
	
	
	Additional query words: 3.51 Windows NT
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTSsearch kbWinNTAdvSerSearch kbMailSearch kbZNotKeyword3 kbSDKDAO351 kbMailGateFax320
	Version           : WINDOWS:3.2; :3.51; winnt:3.51
	
	=============================================================================
	
