---
layout: page
title: "Q193558: COleServerDoc and CArchive Corrupts Large Files"
permalink: /kb/193/Q193558/
---

## Q193558: COleServerDoc and CArchive Corrupts Large Files

{% raw %}

	Article: Q193558
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications that use the IStorage and IStream classes, or other classes derived
	from them, to save data in the form of OLE Structured Storage may generate
	corrupted data files when the size of the output file exceeds some threshold.
	
	For example, an application that uses the CArchive method of the COleServerDoc
	base class may result in the following error being generated or logged:
	
	  0x80030109 (STG_E_DOCFILECORRUPT)
	
	In such cases, the resultant output file may be smaller than expected with the
	first part of the file being overwritten with data that should have been near
	the end of the file.
	
	CAUSE
	=====
	
	The code that implements this functionality uses one of two modes of operation
	depending on the amount of memory that is available in a particular memory heap.
	A problem in the low-memory mode results in the output file being corrupted.
	Generation of a large or very fragmented file may tend to use up more of the
	memory in this heap, resulting in corrupted output being generated.
	
	The size threshold at which corruption takes place will depend on various factors
	unique to each system but would typically only affect files larger than 80 MB.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File Name     Platform
	  -------------------------------------------------------------
	  09/25/98  01:07p              698,640  Ole32.dll     (x86)
	  03/24/98  06:02p              102,160  Rpcss.exe     (x86)
	
	  09/25/98  01:07p            1,249,552  Ole32.dll     (Alpha)
	  03/24/98  06:04p              181,008  Rpcss.exe     (Alpha)
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	Additional query words: 4.00
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
