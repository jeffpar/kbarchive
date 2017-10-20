---
layout: page
title: "Q133236: HOWTO: Configure Books Online to Search Multiple Books"
permalink: /kb/133/Q133236/
---

## Q133236: HOWTO: Configure Books Online to Search Multiple Books

{% raw %}

	Article: Q133236
	Product(s): Microsoft C Compiler
	Version(s): WINNT:2.0,2.1,2.2;
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC200 kbVC210 kbVC220 kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Books Online's Search Plus feature that ships with Visual C++ on
	Windows 95 and Windows NT version 3.51, WinHlp32.exe creates index files that
	take several minutes to generate. The index files created will only search the
	text of the selected book. This article describes how to configure Books Online
	to search multiple books simultaneously.
	
	MORE INFORMATION
	================
	
	A contents (.CNT) file is used to specify all the help files you wish to search.
	This will create full text search (.FTS) files for each file you wish to include
	in your regular searches. Subsequent access to Books Online searches will not
	regenerate the .FTS files.
	
	Below is an example (VC20BKS1.CNT) which you can use with Books Online Search
	Plus.
	
	:index Book 1, Users Guide = vc20bks1.hlp
	:index Book 2, What's New, MFC = vc20bks2.hlp
	:index Book 3, C/C++ = vc20bks3.hlp
	:index Book 4, Win32 API = vc20bks4.hlp
	:index Book 5, OLE 2.0 SDK = vc20bks5.hlp
	:index Book 6, ODBC = vc20bks6.hlp
	:index Book 7, Extensions (68K Porting) & Miscellaneous  = vc20bks7.hlp
	:index VC++ Knowledge Base Articles = Win32kb.hlp
	
	To make your .FTS files:
	
	1. Place VC20BKS1.CNT in your \msvc20\help directory.
	
	2. Delete any related .FTS and .GID files. They may be in your \msvc20\help
	  directory, your <windows>\help directory on Windows 95, or your
	  <windows> directory on Windows NT. (The .GID files are hidden.)
	
	3. Make sure you have copies of all of the Visual C++ Books Online help files in
	  your local directory. They are named VC20BKS[1-7].HLP.
	
	4. From Books Online's Contents, select "How to Use Books Online."
	
	5. Click the Search Plus button, which takes you into the Help Wizard.
	
	6. Select the Customize search capabilities option, and then click the Next
	  button.
	
	7. From the list of books, select the books you wish to keep .FTS files on.
	  Click the Next button in this and subsequent pages until finished. Note that
	  depending on subsequent choices, the .FTS files can occupy a great deal of
	  disk space and take several minutes to generate.
	
	Here are examples of .FTS file sizes and build times for Visual C++ version 2.2:
	
	               "Don't include phrase searching"      Default Selections
	               Size (bytes)                          Size (bytes)
	----------------------------------------------------------------------
	Book 1            832,512                              3,088,384
	Book 2          1,816,578                              7,212,544
	Book 3          1,228,800                              4,493,312
	Book 4          3,235,328                             13,166,080
	Book 5            974,336                              3,645,952
	Book 6            420,864                              1,806,848
	Book 7          1,349,632                              4,228,512
	KB Articles       932,352                              3,481,600
	
	approx. build time  7 min.                            11 min.
	
	NOTE: These files were generated on a P5-90. The sizes may vary depending on your
	path and options selected. When building using the "Don't include phrase
	searching" option, a VC20BKS1.FTG file will also be generated which is 4,911,104
	bytes.
	
	Additional Details
	------------------
	
	If you change the contents of the .CNT file, you will have to repeat the steps
	and delete the existing .FTS and .GID files.
	
	Using a contents (.CNT) file allows you to add other Help files to your Books
	Online full text search. This will not give you additional F1 search
	capability.
	
	You can remove the index (.IND) files from the \mscv20\help directory when
	running on Windows NT 3.51 and later. These indices are only used by the Help
	system included with earlier versions of Windows NT. They are no longer
	necessary.
	
	All searches are forward searches. For example, if you select book 3 before you
	begin your search, you will not pick up items in book 2. Thus, if you want to
	search all books, you must select the "How to Use Books Online" selection in the
	Contents window.
	
	For more information the Win32 help system, refer to the Win32 Software
	Development Kit (SDK) documentation.
	
	Additional query words: online
	
	======================================================================
	Keywords          : kbide kbVC kbVC200 kbVC210 kbVC220 kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC220 kbVC200 kbVC210 kbVC32bitSearch
	Version           : WINNT:2.0,2.1,2.2;
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
