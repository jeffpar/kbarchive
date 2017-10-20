---
layout: page
title: "Q92573: Most Recently Used (MRU) Lists of Previous Connections in WFWG"
permalink: /kb/092/Q92573/
---

## Q92573: Most Recently Used (MRU) Lists of Previous Connections in WFWG

{% raw %}

	Article: Q92573
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a network connection is made with Chat, ClipBook, File Manager, or Print
	Manager in Windows for Workgroups (WFWG), it is placed in the WIN.INI file in a
	Most Recently Used (MRU) list.
	
	The purpose of the Most Recently Used sections of the WIN.INI file is to maintain
	a list of previous connections for the network-aware utilities in Windows for
	Workgroups. Once an entry is made in the Most Recently Used list, it can only be
	removed by either adding enough new connections or editing the WIN.INI file.
	
	MORE INFORMATION
	================
	
	In the WIN.INI file, the previous connections are stored in three different
	sections:
	
	- Chat and ClipBook connections are stored in the [MRU_Chat] section. The limit
	  on the number of previous connections in this section is 12.
	
	- File Manager connections are stored in the [MRU_Files] section. The limit on
	  the number of previous connections in this section is 12.
	
	- Print Manager connections are stored in the [MRU_Printers] section. The limit
	  on the number of previous connections in this section is 12.
	
	At the top of each of these sections is an Order= line and it keeps the order of
	the most recently used connections. Below the Order= line is the list of all the
	connections that correspond to the letters in the Order= line.
	
	For example, if the Order=dabc line is present, the most recent connection made
	was the connection listed under d=, while the connection that has gone the
	longest without being used is listed on the c= line.
	
	Removing a Connection from the MRU List
	---------------------------------------
	
	To remove a connection from a Most Recently Used list, use the following steps:
	
	1. Edit the WIN.INI file using any text editor.
	
	2. Locate the appropriate Most Recently Used section.
	
	3. Delete the line that lists the connection.
	
	4. Reorder the lines so that there is no break in the order. For example, when
	  there are connections listed from "a" to "e" as in the following list (when
	  "d=\\george" is deleted), change "e=\\lisa" to "d=\\lisa".
	
	        [MRU_Chat]
	        Order=cadeb
	        a=\\john
	        b=\\bill
	        c=\\susan
	        d=\\george
	        e=\\lisa
	
	5. Remove references to any connections that no longer exist from the Order=
	  line. In the above example, "e" was renamed to "d," so the Order= should be
	  changed to Order=cadb.
	
	6. Save the changes to the WIN.INI file and restart Windows for Workgroups.
	
	Connections are also removed if the limit is exceeded by adding a new connection.
	Once the limit is exceeded, the last connection referenced in the Order= line is
	removed and the new connection becomes the first on the Order= line.
	
	Additional query words: 3.10 3.1 win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
