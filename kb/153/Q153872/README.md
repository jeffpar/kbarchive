---
layout: page
title: "Q153872: INFO: DDConv Messages of Visual SourceSafe 4.0"
permalink: /kb/153/Q153872/
---

## Q153872: INFO: DDConv Messages of Visual SourceSafe 4.0

{% raw %}

	Article: Q153872
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0a, 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Macintosh, versions 4.0a, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Ddconv.exe is the utility that converts a SourceSafe 3.x database to 4.0, 4.0a,
	or 5.0 format. The setup process automatically runs it when you upgrade. When
	run, it puts a log file called ddcerr.log in the DATA subdirectory. This file
	lets the user know what has happened during the conversion.
	
	MORE INFORMATION
	================
	
	The ideal ddcerr.log file has only the following ten lines in it:
	
	  DDCONV initializing
	  Creating subfolders
	  Moving files
	  Creating rights DB
	  Building project list
	  Creating names DB
	  Converting log files
	  Adding project rights
	  Converting users
	  DDCONV finished
	
	The following conventions are used in the messages below:
	
	  <Physical Log File Name> is the file in the DATA directory without an
	  extension, such as BKAAAAAA.
	
	  <Physical Data File Name> is the file in the DATA directory with an
	  extension of .A or .B, such as BKAAAAAA.a.
	
	  <Project Name> is the name of the project in the Visual SourceSafe
	  interface, such as $/MyProject/Sub-Project.
	
	  <File Name> is the name of the file in the Visual SourceSafe
	  interface,such as MyFile.txt
	
	  # is a number, such as 1.
	
	How To Identify a File from its Physical Log File Name
	------------------------------------------------------
	
	You can open the physical log file in a text editor and look at the non- garbage
	characters. On the first line, the name of the file/project is written. Later in
	the file you might see a reference to a project that this file or project is in.
	Don't write anything to this file!!
	
	The following four messages may appear in the file and can be considered
	harmless:
	
	  <File Name>
	  <Physical Log File Name> parent project <Project Name> not found,
	  skipping parent record.
	
	
	  <File Name>
	  <Physical Log File Name> Parent count in old DB #, correcting to actual
	  count #.
	
	
	  <Project Name>
	  <Physical Log File Name> Project entry count in old DB #, correcting to
	  actual count #.
	
	
	  <Project Name>
	  <Physical Log File Name> Format record, invalid, correcting.
	
	
	If the following messages appear in the file, the conversion process did not
	successfully convert every file in the DATA directory:
	
	  <File Name>
	  Error converting header in logfile <Physical Log File Name>.
	
	This file was not able to be converted because of corruption in the header of the
	file. If the file is needed, recover the 3.1 database, then fix it and retry the
	conversion. Be sure you have run the 3.1 analyze on the 3.1 database. If the
	file is not needed, move the log file and the data file (BKAAAAAA and
	BKAAAAAA.a) out of the DATA directory, and run the new analyze with the -F
	switch to clean up the links to the file. This may take more than one run of
	analyze -F <Path to Data>.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q190881 SAMPLE: Analyze6.exe Utility for Visual SourceSafe
	
	
	  Unable to open project <Physical Log File Name>.
	  Unable to open file <Physical Log File Name>.
	
	The file was locked when the conversion process was running. Unlock the file at
	the operating system level and re-run ddconv on the half-converted database. You
	don't have to recover the 3.1 data.
	
	
	  <Project Name>
	  File <Physical Log File Name> not found.
	  File <Physical Data File Name> not found.
	
	The file mentioned is not found in the data subdirectory. You need to determine
	what file this is referring to and decide whether you need it or not. If you
	need it, and it is a physical log file, you have to go to backups. If it is the
	physical data file name of a project, you can run the new analyze -F <path to
	data> on it. This may take more than one run of analyze -F <Path to
	Data>. If it is the physical data file of a file, then you need to recover
	from backups or someone's working directory. However, it should be noted that
	there is no guarantee that the recovered copy is the correct one. Having the
	incorrect one would mean that all previous versions of the file would be
	retrieved incorrectly.
	
	
	  Error converting project entry records in file <Physical Log File
	  Name>.
	
	Run the new analyze -F <Path to Data> to clean up. You may need to run it
	several times.
	
	
	  <Physical Data File Name> Eliminating duplicate name <File Name>
	  in child list.
	
	This message occurs when there is an active file/project with the same name as a
	deleted file. Ideally, the 3.1 database would be recovered, and then either the
	deleted file would be purged or the active file would be renamed. And then
	ddconv would be run on the 3.1 data again. Otherwise, the new analyze can be run
	with the -F switch on the database which may be able to re-establish the links,
	but it might have to be run several times.
	
	
	  Cannot find physical project file for <Project Name>.
	
	This message occurs when there is an active project with the same name as a
	deleted project. Ideally, the 3.1 database would be recovered, and then either
	the deleted project would be purged or the active project would be renamed. And
	then ddconv would be run on the data again. Otherwise the new analyze can be run
	with the -F switch on the database which may be able to re-establish the links,
	but it might have to be run several times.
	
	
	  Error writing to file.
	
	This message occurs because ddconv could not upgrade the file. Frequent reasons
	for this are:
	
	There is an operating system lock on the file. Remove it and re-run ddconv on the
	half converted database.
	
	The file is zero byte count. Recover from backup. Or if it is both the log file
	and the data file (BKAAAAAA and BKAAAAAA.a) are zero byte count, move the files
	out of the DATA directory, and then run the new analyze with the -F switch to
	remove the links. Analyze -F <Path to Data> might have to be run several
	times to clear up the links.
	
	  Too Many File Handles open.
	
	Another process in memory is affected the conversion process. Remove the TSR from
	memory or close the application.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
