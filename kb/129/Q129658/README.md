---
layout: page
title: "Q129658: Reading and Writing Aldus Placeable Metafiles"
permalink: /kb/129/Q129658/
---

## Q129658: Reading and Writing Aldus Placeable Metafiles

{% raw %}

	Article: Q129658
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbfile kbgraphic kbsample kbSDKWin16
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows applications such as Microsoft Word and Microsoft Excel, read and write
	metafiles in a format known as Aldus Placeable Format. This format is
	incompatible with the Windows GetMetaFile(), CopyMetaFile(), and PlayMetaFile()
	functions. This incompatibility occurs because placeable metafiles begin with a
	22-byte header.
	
	Sample code is available in the Microsoft Download Center that you can use to
	read and write these placeable metafiles.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Wmapmf.exe
	  (http://download.microsoft.com/download/platformsdk/sample94/3.1/W31/EN-US/WMAPMF.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q145999 How to Create and Play Enhanced Metafiles in Win32
	
	Additional query words: OpenClipBoard GetClipBoardData CF_METAFILEPICT kbgraphic kbfile
	
	======================================================================
	Keywords          : kbfile kbgraphic kbsample kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
