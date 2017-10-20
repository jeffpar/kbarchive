---
layout: page
title: "Q171560: Inside COM: INF: Missing Header and Source Code Files"
permalink: /kb/171/Q171560/
---

## Q171560: Inside COM: INF: Missing Header and Source Code Files

{% raw %}

	Article: Q171560
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbother kbdocerr
	Last Modified: 16-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside Com ISBN 1-57231-349-8 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The source code for several of the later chapters of Inside COM, appears to be
	missing some header (.h) and source code (.c) files.
	
	MORE INFORMATION
	================
	
	This is by design. The MIDL compiler generates these files during the build
	process, when it processes the IDL files that are included in the code.
	
	In each of the programs for Chapters 10, 11, and 12, MIDL generates five files
	from the Server.idl file: Iface.h, Server.tlb, Proxy.c, Guids.c, and DllData.c.
	The make files included with these sample programs all run the MIDL compiler to
	produce these files. The book explains this process on pages 260-261.
	
	The Tangram sample program includes several IDL files from which MIDL generates
	many header and source code files. For more information, see pages 351-352 in
	the text, and the Readme.txt file in the \Tangram directory on the companion
	CD.
	
	Because the MIDL compiler must write several files to the source code directory,
	you cannot compile these files directly from the CD-ROM. You must first copy the
	source code files to your hard drive before attempting to compile the program.
	
	Additional query words: mspress ms_press press bookbug com automation
	
	======================================================================
	Keywords          : kbother kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
