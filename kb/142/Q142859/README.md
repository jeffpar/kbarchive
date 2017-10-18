---
layout: page
title: "Q142859: Configuring Internet Server Gopher Searches"
permalink: kb/142/Q142859/
---

## Q142859: Configuring Internet Server Gopher Searches

	Article: Q142859
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The search function to search for files on a Gopher server is not included with
	Microsoft Internet Server. However, Microsoft Internet Server does support
	searching through the European Microsoft Windows NT Academic Centre (EMWAC) Wide
	Area Information Server (WAIS) Toolkit, which is included in the Windows NT
	Resource Kit. You can use these tools to prepare and search full-text databases
	for computers running Microsoft Windows NT.
	
	NOTE: If you install the WAIS Toolkit, make sure to do it after you install the
	Microsoft Internet Information Server software.
	
	MORE INFORMATION
	================
	
	The following procedure shows how the server conducts searches for information:
	
	1. The process passes the information typed in at the client as search strings.
	
	2. The server does the search.
	
	3. The filenames containing the strings are retrieved.
	
	4. The server converts the filenames to a Gopher Menu.
	
	5. The server sends the Gopher Menu to the client.
	
	To configure the server for searches, you need to do the following:
	
	- Configure an index of keywords to speed up the search.
	
	- Set up search tools, either by selecting them from other sources, or by
	  writing your own.
	
	- Create tag information for all searches supported by a particular server.
	
	Creating an Index File
	----------------------
	
	First, install the EMWAC WAIS software. Then you can create an index file by
	using the WAIS Toolkit.
	
	1. Prepare a directory to work in, for example:
	
	  C:\Search
	
	2. Create a subdirectory to hold the files you are going to index, for example:
	
	  C:\Search\Here
	
	3. Put some text files into the C:\Search\Here directory. These files must be
	  ASCII text files.
	
	To Create an Index
	------------------
	
	1. Make C:\Search your current directory.
	
	2. Execute the following command with these parameters:
	
	  waisindex -d myindex here\*
	
	3. Check the messages from Waisindex to make sure that there are no errors.
	
	4. In the C:\Search directory, type DIR to make sure that Waisindex has created
	  the seven index files named Myindex.*.
	
	5. Search your files. For the example, search for a word that you know is in the
	  files.
	
	Searching the Index
	-------------------
	
	The Waislook command in the EMWAC WAIS Toolkit allows you to search files through
	the index file you created with Waisindex. Make sure C:\Search is the current
	directory and execute the following command with these parameters:
	
	  waisindex -d myindex word
	
	where word is any word that you know appears in one of the files.
	
	Check the output of Waislook, which will show you the names of the files that
	contain the word you typed.
	
	Configuring Log Records
	-----------------------
	
	When you set up a Gopher server, you can see who has been using it and how many
	times your online information was accessed. Through Gopher you can log incoming
	connections to the server.
	
	To record logs properly:
	
	1. Determine in which directory the logs will be stored.
	
	2. Specify the frequency with which logs are collected (every day, every week,
	  every month, etc.).
	
	3. Select the log tools you want to analyze the logs your server collects.
	
	Additional query words: prodiis1 gopher wais emwac
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
