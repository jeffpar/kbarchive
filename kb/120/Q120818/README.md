---
layout: page
title: "Q120818: Explanation of WFW&lt;nn&gt; Files in Windows for Workgroups 3.11"
permalink: /kb/120/Q120818/
---

## Q120818: Explanation of WFW&lt;nn&gt; Files in Windows for Workgroups 3.11

{% raw %}

	Article: Q120818
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you make changes to your Windows for Workgroups network configuration,
	Network Setup creates backup versions of your system configuration files in the
	Windows for Workgroups directory.
	
	When you complete a change to your network configuration using Network Setup, you
	are prompted to either "Restart Windows" or "Continue"; or "Restart Computer" or
	"Continue." Choosing to restart in either case causes copies of the system
	configuration files to be generated and placed in the Windows for Workgroups
	directory. The following example illustrates both the order in which the files
	are copied and their respective target file names:
	
	  PROTOCOL.INI  -->   WFW02
	  SYSTEM.INI    -->   WFW03
	  WIN.INI       -->   WFW04
	  CONFIG.SYS    -->   WFW05
	  AUTOEXEC.BAT  -->   WFW06
	
	MORE INFORMATION
	================
	
	As pictured above, Windows for Workgroups uses the naming convention
	"WFW<nn>," where <nn> is five sequential numbers. The range of file
	sequences is 2 through 99999. Additional changes to the network configuration
	produce five more backup files. These files are sequenced wherever there is a
	contiguous gap. As many of these files can be created as free disk space
	allows.
	
	These files are backups only and can be removed if no longer needed for
	troubleshooting.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
