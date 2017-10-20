---
layout: page
title: "Q247561: How to Edit Index Server Noise-Word Lists"
permalink: /kb/247/Q247561/
---

## Q247561: How to Edit Index Server Noise-Word Lists

{% raw %}

	Article: Q247561
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to edit noise-word list files and how to activate the
	changes.
	
	MORE INFORMATION
	================
	
	During the index and query process, Index Server uses noise-word list files for
	each language to filter the content provided by the wordbreaker and stemmer.
	This noise-word list includes words and characters that Index Server will not
	store in the catalog. This prevents Index Server from storing useless
	information and wasting disk space. To modify the noise-word list:
	
	1. Select the correct noise-word list file for the language you want to change.
	
	  For each installed language, you can find the corresponding noise-word list
	  file in the registry under:
	
	  HKLM\System\CurrentControlSet\Control\ContentIndex\Language\<language>\NoiseFile
	  REG_SZ
	
	The noise-word list files are stored in the %SystemRoot%\System32 folder.
	
	For example, the English_US noise-word file is stored as
	%SystemRoot%\System32\Noise.enu.
	
	2. Open the noise-word file with any text editor (such as Notepad) and edit the
	  content. Save your changes.
	
	3. Stop and start the ContentIndex service for the changes to take effect. To
	  stop and start the service, use Service Manager or the following command
	  lines:
	
	  net stop "content index"
	  net start "content index"
	
	Note that all the documents must be indexed again if they will be processed by
	the noise-word file you have changed. For example, assume that you remove a word
	from the Noise.enu file and that there is a document that has the EN-US language
	settings and contains this word. If you query the catalog for this word, you do
	not receive the document in the results. This occurs because the data that is
	stored in the catalog for this document was built with the old noise-word list.
	To receive the correct results, the document must be processed again using the
	new noise-word list.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
