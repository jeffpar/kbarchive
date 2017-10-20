---
layout: page
title: "Q59977: Mac Hyp: Using HyperCard Global Variables for Error Checking"
permalink: /kb/059/Q59977/
---

## Q59977: Mac Hyp: Using HyperCard Global Variables for Error Checking

{% raw %}

	Article: Q59977
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Software Development Kit (SDK) for HyperCard uses two
	HyperCard global variables to report the results of the msmail external function
	call. These variables are as follows:
	
	  mailResult
	  mailResultText
	
	The HyperCard global mailResult holds a number that is the return code of the
	last call made to msmail. This is zero if the call succeeded. If an error
	occurred, the HyperCard global mailResultText contains a textual description of
	the error. If no error has occurred, mailResultText contains "No Error."
	
	Global variables are used by declaring them as globals in the script with the
	Global command. For example:
	
	     on mouseup
	        global mailResult, mailResultText
	        put msmail(CreateMessage) into msref
	        if mailresult <> 0 then
	           answer "Error: " & mailResultText
	           exit mouseup
	        end if
	        ....
	
	If a call to the server is not successful, these functions are the only way to
	find out that there has been an error. They are very useful in debugging and in
	making a stack "bullet-proof" in operation.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
