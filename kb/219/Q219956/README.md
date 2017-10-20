---
layout: page
title: "Q219956: PRB: Too Many Files Open Running  VFP on Windows Terminal Server"
permalink: /kb/219/Q219956/
---

## Q219956: PRB: Too Many Files Open Running  VFP on Windows Terminal Server

{% raw %}

	Article: Q219956
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg KbClientServer kbvfp kbvfp300 kbvfp500a kbvfp600 kbGrpDSFox
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	- the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running Visual FoxPro applications through Windows Terminal Server, the
	following error message occurs if more than 2048 file handles are open:
	
	  Too many files open
	
	CAUSE
	=====
	
	To maintain compatibility with existing Server Message Block (SMB)-based
	products (for example, Windows NT 3.x and 4.0, Windows 95), Terminal Server's
	use of SMB has not been modified from Windows NT Server 4.0. This may cause a
	problem if several Terminal Server users connect to a single network share,
	either on the Terminal Server or elsewhere on the network. The potential problem
	is an SMB limitation of 2048 open file handles.
	
	MORE INFORMATION
	================
	
	The error message indicates that FoxPro for Windows or Visual FoxPro has
	attempted to open more than it's internal limit of files. This behavior and the
	resulting error message occur as a result of a limitation of 2048 open file
	handles in Windows NT Terminal Server.
	
	With Windows 2000 server, the open file handles limit has been expanded to 16,384
	(as seen with "Net Config server"). While the open file handles limit has been
	expanded, the error may still occur unless use of a separate virtual circuit by
	each Terminal Server has been enabled.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Initiate a connection to a Windows NT Terminal Server.
	
	2. Using the connection to Windows NT Terminal Server, launch a session of
	  FoxPro for Windows or Visual FoxPro.
	
	3. Create a program file called "MAXFILES.PRG", using the following code:
	
	  FOR i=1 TO 684
	     SELECT 0
	     make_cmd="create table test"+ALLTRIM(STR(i))+" (var1 c(10), var2 m)"
	     *!* Open one file handle for each table created
	     *!* Open a second file handle for each fpt file
	     &make_cmd
	     select_table="test"+ALLTRIM(STR(i))
	     SELECT (select_table)
	     index_cmd="index on var1 tag junk of test"+ALLTRIM(STR(i))
	     *!* Open a third file handle for each index created
	     &index_cmd
	  NEXT
	
	4. From the Command window, type "DO MAXFILES."
	
	5. Observe that the program will error out with the following error message:
	
	  Too many files open
	
	6. Click Suspend
	
	7. From the Command window, type the following code:
	
	  ? i
	  ? i*3
	
	  Note that the value for i that is displayed is 683, and the value that is
	  displayed for i*3 is 2049.
	
	REFERENCES
	==========
	
	For additional information about Microsoft Windows NT Server version 4.0,
	Terminal Server Edition, please see the following article in the Microsoft
	Knowledge Base:
	
	  For additional information, click the article number below to view the
	  article in the Microsoft Knowledge Base:
	
	  Q190162 Terminal Server and the 2048 Open File Limitation
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg KbClientServer kbvfp kbvfp300 kbvfp500a kbvfp600 kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbOSWinSearch kbOSWinNT400 kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a kbOSWinNTSearch
	Version           : WINDOWS:2.6,2.6a,3.0,3.0b,5.0,5.0a,6.0; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
