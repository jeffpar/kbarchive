---
layout: page
title: "Q185291: WD97: How Wrd97cnv.exe Determines Where to Place Files"
permalink: /kb/185/Q185291/
---

## Q185291: WD97: How Wrd97cnv.exe Determines Where to Place Files

{% raw %}

	Article: Q185291
	Product(s): Word 97 for Windows
	Version(s): 6.0,6.0a,6.0c,7.0,7.0a,97
	Operating System(s): 
	Keyword(s): kbdta kbconversion winword word97
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Word for Windows, versions 6.0, 6.0a, 6.0c 
	- Microsoft Word for Windows 95, versions 7.0, 7.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses how the Word 97 Import Converter determines where to
	install files. The Word 97 Import Converter allows you to open Word 97 documents
	in Word version 6.0 or 7.0.
	
	MORE INFORMATION
	================
	
	The Wrd97cnv.exe file contains a converter that is included with Microsoft Word
	97 Service Release 1 (SR-1) Enterprise Update. It converts documents from
	Microsoft Word 97 format to Word 7.0 for Windows 95, or Word 6.0 for Windows or
	Windows NT. The Setup program installs either Ms.cnv or Mswrd832.cnv on your
	computer (depending on the version of Windows you are running). The Setup
	program also installs the Wrd97cnv.doc Readme document.
	
	How Wrd97cnv.exe Setup Determines Where to Install Files
	--------------------------------------------------------
	
	The converter Setup program checks two registry keys to determine the version of
	Word (Word 7.x, or Word 6.x for Windows or Windows NT) and the installation
	location.
	
	The Word97Cnv.exe converter Setup checks the following registry keys to determine
	whether Word 7.0, or Word 6.0 for Windows or Windows NT is installed.
	
	NOTE: Word 97 does not use either of these keys.
	
	Word 6.x:
	
	  Hkey_Classes_Root\CLSID\{00020900-0000-0000-C000-00000000}\Local Server
	
	Word 7.0 or Word 6.0 for Windows NT:
	
	  Hkey_Classes_Root\CLSID\{00020900-0000-0000-C000-00000000}\Local Server32
	
	NOTE: If both Local Server (Word 6.0 for Windows) and Local Server32 (Word 7.0 or
	Word 6.0 for Windows NT) keys exist, Setup installs both 16-bit and 32-bit
	converters and filters to the appropriate locations.
	
	NOTE: If only Word 97 is installed, the converter Setup program reports the
	following error:
	
	  Microsoft Word 97 converter Setup was not completed for the following
	  reason:
	
	  Setup could not locate an installed version of Word compatible with the Word
	  8.0 converter. This converter is suitable for use with Microsoft Word 6.0 and
	  95 only.
	
	If Setup detects Word 7.0 or Word 6.0 for Windows NT, it checks the following
	registry key to determine the location used by any existing converters:
	
	  Hkey_Local_Machine\Software\Microsoft\Shared Tools\Text Converters\Import
	
	If the folder pointed to by this registry key exists, Setup installs the
	converter to this location. If the folder does not exist, Setup creates it and
	installs the converter to this location.
	
	If Setup detects Word 6.0 for Windows, it always installs the 16-bit converters
	and filters to:
	
	  <drive>:\<Windows>\MsApps\textconv and \grphflt.
	
	where <drive>:\<Windows> is the location of your Windows directory.
	
	These folders are created if they don't exist.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  
	
	  Q162214 WD: How to Obtain the Word 97-2000 Import Converter
	
	  Q157091 WD97: How to Open Documents into an Earlier Version of Word
	
	  Q161841 WD: Error Message Opening Word 97 File in Word 6.x, 7.x
	
	  Q176017 WD: How to Do an Administrative Installation of Word 97-2000 Import
	  Converter (Wrd97cnv.exe)
	
	  Q176021 WD: Directory Error Running Wd97cnv.exe from the Server
	
	  Q184323 WD95: Files Installed by the Word 97 Import Converter
	
	  Q184328 WD6x: Files Installed by the Word 97 Import Converter
	
	Additional query words: converts converting conversion converted transferred transferring transfers export word 95 wrd97cnv
	
	======================================================================
	Keywords          : kbdta kbconversion winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbWord95Search kbZNotKeyword2 kbWord600 kbWord600a kbWord600c kbWord95 kbWord95a
	Version           : :6.0,6.0a,6.0c,7.0,7.0a,97
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
