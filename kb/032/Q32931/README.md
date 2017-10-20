---
layout: page
title: "Q32931: Maze.exe Demonstrates DDE"
permalink: /kb/032/Q32931/
---

## Q32931: Maze.exe Demonstrates DDE

{% raw %}

	Article: Q32931
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbDDE
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MAZE is a file in the Microsoft Download Cetner that contains the source code to
	an application that demonstrates how to use dynamic data exchange (DDE) in a
	Windows-based application.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Maze.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	When multiple instances of the MAZE application are started, MAZE draws a
	bouncing ball in the client area of one of its instances. MAZE creates a DDE
	communications link between instances of the MAZE application and uses this link
	to pass the ball to other instances at random. MAZE also creates a DDE
	conversation with Excel and passes statistical information about the ball to
	Excel.
	
	MAZE demonstrates how to use DDE to pass information between applications and how
	to use PeekMessage to allow other applications to run simultaneously with a
	process-intensive task.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbDDE 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	

{% endraw %}
