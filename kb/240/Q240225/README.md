---
layout: page
title: "Q240225: Description of Adsutil and MetaEdit Used to Modify the Metabase"
permalink: /kb/240/Q240225/
---

## Q240225: Description of Adsutil and MetaEdit Used to Modify the Metabase

	Article: Q240225
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Adsutil and MetaEdit tools, which are used to modify
	the metabase.
	
	MORE INFORMATION
	================
	
	Adsutil
	-------
	
	Adsutil is a command-line utility, written in Visual Basic, Scripting Edition,
	that uses the Cscript.exe command line scripting utility that comes with the
	Windows NT Option Pack. Adsutil.vbs is located in the
	%SystemRoot%\system32\inetsrv\adminsamples folder.
	
	The documentation for Adsutil.vbs is located in the following locations (assuming
	that the product documentation is installed on the local computer):
	
	- Description of how to use sample administration scripts, including Adsutil:
	
	http://localhost/iishelp/iis/htm/adminsamples/default.htm
	
	- How to use Adsutil:
	
	http://localhost/iishelp/iis/htm/adminsamples/adsutil.htm
	
	MetaEdit
	--------
	
	The IIS 4.0 Resource Kit describes MetaEdit as follows:
	
	  The Metabase Editor (MetaEdit) is a tool that provides similar functionality
	  to the Windows NT Registry Editor. Using MetaEdit, you can browse and modify
	  attributes in the Metabase. Note that in using MetaEdit, you can make changes
	  that may damage your IIS configuration. Be sure to edit all entries
	  carefully.
	
	MetaEdit is one of the utilities that ship with the IIS 4.0 Resource Kit, which
	is available from Microsoft Press. For more information, see
	http://mspress.microsoft.com/prod/books/1398.htm.
	
	The MetaEdit documentation (MetaEdit.doc) is located in the \IIS Resource
	Kit\Utility\MetaEdit folder on the IIS Resource Kit compact disc.
	
	Mdutil.exe
	----------
	
	Another utility, Mdutil.exe, is included on the NTOP and Windows 2000 CDs only,
	in the following locations:
	
	- IIS4: NTOP-CD:\ntoptpak\x86\en\winnt.srv
	
	- IIS5: Win2k-CD:\i386\mdutil.ex_
	
	NOTE: You must use Expand.exe to decompress this file.
	Mdutil.exe is NOT included with the Web download of the NTOP, and has NO
	documentation beyond the help page that is displayed when no parameters are
	specified. Like Metaedit.exe, Mdutil.exe is not a supported utility.
	
	NOTE: Although the syntax for configuring the metabase with Mdutil.exe is very
	similar to that of Adsutil.vbs, some metabase property names may be different,
	because Adsutil.vbs uses the IIS Admin Objects (IISAO), the ADSI provider
	supplied with IIS. Mdutil.exe uses the IIS Admin Base Objects (ISABO), a C/C++
	interface for programmatically accessing the metabase.
	
	For more information on ADSUTIL.vbs documentation in IIS version 5.0, please see
	the following Microsoft Web site:
	
	  http://windows.microsoft.com/windows2000/en/server/iis/htm/adminsamples/adsutil.htm
	
	For additional information on the latest MetaEdit documentation and availability,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q232068 FILE: How to Download, Install, and Uninstall the IIS MetaEdit 2.1
	  Utility
	
	Additional query words: ntop metaedit.exe mdutil mdutil.exe vbs meta-base meta-edit
	
	======================================================================
	Keywords          : kbDSupport kbiis400 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
