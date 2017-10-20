---
layout: page
title: "Q151088: Content of VFP for Mac Frequently Asked Questions Help File"
permalink: /kb/151/Q151088/
---

## Q151088: Content of VFP for Mac Frequently Asked Questions Help File

{% raw %}

	Article: Q151088
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty kbreadme kbhelpfilekbfaq
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Following is the content of the Microsoft Visual FoxPro for Macintosh Frequently
	Asked Questions (FAQ) Help File located in the main Visual FoxPro folder.
	
	MORE INFORMATION
	================
	
	1. What are the system requirements for Visual FoxPro?
	
	  A Power Macintosh with a 601 PPC processor or later.
	  8 MB RAM, 16 MB RAM recommended.
	  80 MB available disk space (for full installation).
	  Macintosh System 7.1.2 or later.
	
	2. Can Visual FoxPro make executables?
	
	  Visual FoxPro can create compact executables for Power Macintosh and Macintosh
	  systems. Compact executables run against a support library that is optimized
	  for each platform.
	
	3. Which ODBC drivers ship with Visual FoxPro?
	
	  Visual FoxPro ships with the Visigenic SQL Server ODBC driver only. Other
	  drivers from third-party developers, such as Intersolv, are also available.
	
	  NOTE: As of 12/9/98, Visigenic has been acquired by INPRISE, Inc.
	
	4. What OLE features does Visual FoxPro support?
	
	  Visual FoxPro supports OLE Automation, including the linking and embedding of
	  objects. It does not support In-Place Activation or Visual Editing.
	
	5. How do I perform an Administrative Setup?
	
	  You need to hold the COMMAND key down while you double-click the Setup icon.
	  The initial screen you see has Administrative Setup in the title bar. This
	  confirms that you have entered the Administrative Setup mode. The Setup
	  program provides the necessary dialogs to guide you through an Administrative
	  Setup.
	
	6. Is there a Standard Edition of Visual FoxPro for Power Macintosh?
	
	  Visual FoxPro for Power Macintosh is available in the Professional Edition
	  only.
	
	7. Can I share tables and databases with Visual FoxPro for Windows?
	
	  Yes. Because of the common database and table format, sharing data across
	  platforms is no different than multiple users sharing data on the same
	  platform.
	
	8. In Visual FoxPro for Power Macintosh, can I use .OCX controls such as the
	  Outline or MAPI controls that came with Visual FoxPro for Windows?
	
	  No. At the time of this release, OCXs are not supported on the Power
	  Macintosh.
	
	9. I want to use a bitmap that I ported from Windows, but on the Macintosh the
	  bitmap does not display correctly. Why?
	
	  Your bitmap was probably saved as an RLE encoded bitmap (a compressed Windows
	  bitmap). You need to use a graphics program to convert the bitmap to an RGB
	  encoded bitmap, or Macintosh PICT-type picture.
	
	10. What is the recommended 68K Macintosh distribution platform?
	
	  A Macintosh with a 68040 processor.
	  8 MB RAM, 16 MB RAM recommended.
	  Macintosh System 7.1.1 or later.
	
	11. Do I need any additional licenses to distribute libraries with my
	  applications?
	
	  No. You don't need to obtain any additional licenses to distribute ASLM or
	  CFM libraries. For more information on the Microsoft License Agreement, see
	  the License Information text file in the Microsoft Visual FoxPro folder and
	  the Distributable Files topic in Visual FoxPro Help.
	
	12. Do I need any additional licenses to distribute Microsoft Graph with my
	  applications?
	
	  No. You don't need to obtain any additional licenses to distribute Microsoft
	  Graph with your applications. For more information on the Microsoft License
	  Agreement, see the License Information text file in the Microsoft Visual
	  FoxPro folder and the Distributable Files topic in Visual FoxPro Help.
	
	13. What compilers can I use to build CFMs for Visual FoxPro?
	
	  Microsoft includes libraries for use with Microsoft Visual C++ 4.0 Cross
	  Compiler, Symantec C++, MetroWerks CodeWarrior Gold, and Macintosh
	  Programmers Workshop.
	
	14. What happened to the _BEAUTIFY system memory variable?
	
	  The Beautify functionality is now integrated into the Documentation Wizard,
	  accessed by choosing Wizards from the Tools menu.
	
	15. Do I have to convert my version 2.x MLBs to CFMs?
	
	  No. However, you have to recompile your version 2.x MLBs for use with Visual
	  FoxPro 3.0 using the libraries provided in the API folder. For increased
	  performance on the Power Macintosh, you can recompile MLBs into CFMs using
	  the libraries provided.
	
	16. How do I convert my Visual FoxPro 3.0 for Windows forms and reports?
	
	  There is no formal transport process necessary. You simply open the forms and
	  reports in the designers in Visual FoxPro for Power Macintosh and edit them
	  directly. For conditional expression and bulk property changes, use the
	  Transformer included in the Tools folder.
	
	17. How can I control which version of FoxPro launches when I double-click a
	  file?
	
	  You can drag and drop the file directly on the application you would like to
	  be launched. You can also keep one version of FoxPro per partition.
	  Macintosh System Software maintains a desktop database per partition, and
	  launches the most recent application per partition.
	
	REFERENCES
	==========
	
	For information on how to contact INPRISE, Inc., please refer to the following
	article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbreadme kbhelpfile kbfaq
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
