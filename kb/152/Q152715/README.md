---
layout: page
title: "Q152715: RDO 1.0b Release Available"
permalink: /kb/152/Q152715/
---

## Q152715: RDO 1.0b Release Available

{% raw %}

	Article: Q152715
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbfile kbDatabase kbODBC kbVBp400 kb32bitOnlykbbuglist kbfixlist
	Last Modified: 25-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A new version (1.0b) of Remote Data Objects version 1.0 is now available for
	downloading. This version is a maintenance release that fixes a few key bugs
	that were reported by customers over the last few months. The new version number
	of this file is 1.0.3329.
	
	MORE INFORMATION
	================
	
	Use the following instructions to install RDO 1.0b:
	
	1. Visual Basic version 4.0a must be installed on your system.
	
	  To obtain Visual Basic 4.0a, please call 1(800)360-7561. Although this release
	  is free to all registered users, there is a $5 charge to cover shipping and
	  handling. This is only a component release and not a new release of Visual
	  Basic 4.0 itself.
	
	2. An existing version of Msrdo32.dll must reside on your system.
	
	3. Obtain the new version of Msrdo32.dll. (See the MORE INFORMATION section
	  below for information on how to obtain RDO version 1.0b.)
	
	4. Copy the new version of Msrdo32.dll over the existing copy. For example,
	  execute the following command:
	
	  copy a:\msrdo32.dll c:\windows\system32
	
	The new version has no new features and is backwards-binary compatible with the
	current RDO 1.0a version. This new version consists of bug fixes only.
	
	The following is a list of the bugs that were fixed in version 1.0b:
	
	- Fixed memory leak in the GetRows method.
	
	- Fixed support for using query parameters of binary data type (SQL_BINARY and
	  SQL_VARBINARY).
	
	- Fixed storage problems associated with query parameters of smallint data
	  type.
	
	- Fixed a problem with passing byte arrays to AppendChunk where last byte was
	  not copied.
	
	- Fixed a stack problem where the error description returned from an ODBC error
	  or RAISERROR statement was greater than 255 characters.
	
	- Fixed condition where update failed if the only column changed was a BLOB
	  data type.
	
	- Fixed condition where PercentPosition returned a divide by zero error.
	
	How to Obtain RDO version 1.0b
	------------------------------
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Msrdo32.exe
	  (http://download.microsoft.com/download/vb40ent/Sample9/1/W9XNT4/EN-US/Msrdo32.exe)
	
	Release Date: July-02-96
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: 4.00 kbDSupport
	
	======================================================================
	Keywords          : kbfile kbDatabase kbODBC kbVBp400 kb32bitOnly kbbuglist kbfixlist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
