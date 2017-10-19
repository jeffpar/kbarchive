---
layout: page
title: "Q176547: Vb5sp2ds.exe Contains Visual Basic SP2 Debugging Symbols"
permalink: /kb/176/Q176547/
---

## Q176547: Vb5sp2ds.exe Contains Visual Basic SP2 Debugging Symbols

	Article: Q176547
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,97sp2
	Operating System(s): 
	Keyword(s): kbfile kbVBp500 kbVS97sp2 _IK
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft has made available to the public debugging symbols to aid in the
	identification of bugs within Microsoft Visual Basic 5.0 with Visual Studio SP2
	applied. Debugging symbols allow debugging tools like Visual C++ and Dr. Watson
	to obtain stack traces describing the functions within built components, such as
	Msvbvm50.dll, which are being called when a crash occurs. These traces aid
	Microsoft in diagnosing problems that cannot be easily reproduced on other
	systems.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Vb5sp2ds.exe
	  (http://download.microsoft.com/download/vb50ent/Sample29/1/W9XNT4/EN-US/Vb5sp2ds.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	To install the debugging symbols, you first must extract them from Vb5sp2ds.exe.
	When you run the Vb5sp2ds.exe, it will prompt you for a directory in which to
	extract the files. When the extraction process is complete, there will be two
	sub-directories containing the debugging symbol files. These files all have a
	.dbg file extension.
	
	The .dbg files in the "x86" directory are for debugging Visual Studio Service
	Pack 2 on Intel platforms. The .dbg files in the "Alpha" directory are for
	debugging Visual Studio Service Pack 2 on the Alpha platform.
	
	Different debugging tools have different methods of locating debugging symbols.
	Usually, you can put a DBG file in the same directory as the .exe, .dll, or .ocx
	for which it applies and a debugging tool will find it. For instance, if
	MSVBVM50.DLL is in C:\Winnt\System32 directory, you can copy Msvbvm50.dbg to
	C:\Winnt\System32 and most debugging tools will locate it. You should consult
	your debugging tool documentation for more information on installing debugging
	symbols so that the tool can use them.
	
	All the .dbg files in Vb5sp2ds.exe include only Common Object File Format (COFF)
	debugging symbols. To use them with Visual C++ 5.0, you must copy Symcvt.dll
	from your Visual C++ CD-ROM to your Windows system directory. Drwtsn32.exe that
	comes with NT can understand the COFF debugging symbols without Symcvt.dll.
	
	Additional query words: Vb5sp2ds Debugging SP2 DBG
	
	======================================================================
	Keywords          : kbfile kbVBp500 kbVS97sp2 _IK 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500
	Version           : WINDOWS:5.0,97sp2
	Issue type        : kbinfo
	
	=============================================================================
	
