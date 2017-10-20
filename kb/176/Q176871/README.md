---
layout: page
title: "Q176871: XFOR:SNADS PROFS NOTES Proxy Generation Fails on 21 Like Aliases"
permalink: /kb/176/Q176871/
---

## Q176871: XFOR:SNADS PROFS NOTES Proxy Generation Fails on 21 Like Aliases

{% raw %}

	Article: Q176871
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you configure a Microsoft Exchange Server to join an existing Microsoft
	Exchange Site that has any or all of the following connectors installed:
	
	  Linkage 3.2 PROFS
	  SNADS
	  NOTES
	
	you may receive the following error messages:
	
	  Microsoft Exchange Server Setup
	  An error occurred while processing an e-mail address. To view details of
	  the error, see the application event log in the Windows NT Event Viewer
	  on the Microsoft Exchange Server computer.
	  Microsoft Exchange Server Setup
	  ID no. c1030b37
	
	  Microsoft Exchange Server Setup
	  Email addresses for address type 'SNADS' were bot generated because an
	  error occurred. To view details of the error, see the application event
	  log in the Windows NT Event Viewer on the Microsoft Exchange Server
	  computer.
	
	CAUSE
	=====
	
	When encountering like addresses, the Microsoft Exchange System Attendant will
	try to create a unique proxy address. It will only try 20 times to generate this
	unique proxy address. When it encounters more than 20 like addresses, it fails
	to create a unique proxy address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	versions 4.0 and 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	To install this fix:
	
	1. If it exists in the exchsrvr\address\profs directory, rename IBMPXGEN.DLL to
	  IBMPXGEN.OLD.
	
	2. If it exists in the exchsrvr\address\snads directory, rename IBMPXGEN.DLL to
	  IBMPXGEN.OLD.
	
	3. If it exists in the exchsrvr\address\notes directory, rename NTSPXGEN.DLL to
	  NTSPXGEN.OLD.
	
	4. Copy the new IBMPXGEN.DLL to the \exchsrvr\address\profs directory and the
	  \exchsrvr\address\snads directory.
	
	5. Copy the new NTSPXGEN.DLL to the \exchsrvr\address\notes directory.
	
	6. Start the Microsoft Exchange Administrator program in RAW mode,
	
	  Admin.exe /raw
	
	7. Expand the appropriate Site that this Exchange Server belongs to.
	
	8. In the Configuration Container, expand the Addressing container.
	
	9. Expand the E-mail Address Generators container.
	
	10. Select the appropriate email address generator object. This could be the
	  Linkage PROFS Address Generator, the Linkage SNADS Address Generator, or the
	  Linkage NOTES Address Generator.
	
	11. From the File menu, click Raw Properties.
	
	12. Once the RAW properties dialog opens, select the File-Version attribute from
	  the Object attributes list box.
	
	13. Click the Editor command button.
	
	14. If this is a Microsoft Exchange Server, version 5.0, select the File Version
	  editor type. Enter 5.5.1960.8 (periods denote what should be entered in each
	  box presented).
	
	15. If this is a Microsoft Exchange Server, version 4.0, change the HEX number
	  displayed to 0800A80705000500.
	
	16. Click OK in whichever editor box you are using.
	
	17. Click the SET command button.
	
	18. Click OK on the RAW Properties dialog box.
	
	Making this change on one Server in each Site in sufficient. Newer proxy
	generator DLLs are automatically replicated around to Servers with older
	versions. This is done by checking the Directory entry for each email address
	generator. After making the change to the first Server you will need to allow
	time for the directory entry to replicate to all the Servers in the Site.
	
	By design this change should NOT require the Directory or System Attendant
	services to be re-started. However, if the proxy DLL was loaded in memory at the
	time this change occured, it is possible that a restart of these services will
	be necessary.
	
	
	Additional query words: proxies proxygen lotus IBM
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
