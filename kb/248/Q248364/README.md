---
layout: page
title: "Q248364: Updating Mime Types with ADSUTIL.VBS Results Corrupted Mime Type"
permalink: /kb/248/Q248364/
---

## Q248364: Updating Mime Types with ADSUTIL.VBS Results Corrupted Mime Type

{% raw %}

	Article: Q248364
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbiis400 kbiis500
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are creating or updating Mime Types with the Visual Basic Script
	ADSUTIL.vbs that ships with Microsoft Internet Information Server (IIS) 4.0 and
	above, the script can lead to a corrupted Mime Type Metabase entry.
	
	CAUSE
	=====
	
	There is an error in function MimeMapSet of the ADSUTIL.vbs script:
	
	  Function MimeMapSet(ObjectPath, ObjectParameter, MachineName)
	         .
	         .   (some lines removed)
	         .
	
	          ' Fill the list with mime entries
	          For MimeEntryIndex = 0 To UBound(MimeMapList)
	
	                  MimeStr = Args(2 + MimeEntryIndex)
	                  MimeOutPutStr = MimeOutPutStr & """" & MimeStr & """ "
	
	                  Set MimeEntry = CreateObject("MimeMap")
	
	  ERROR -->       MimeEntry.MimeType = Right(MimeStr, InStr(MimeStr, ",") - 1)
	                  MimeEntry.Extension = Left(MimeStr, InStr(MimeStr, ",") - 1)
	
	                  Set MimeMapList(MimeEntryIndex) = MimeEntry
	          Next
	
	         .
	         .   (some lines removed)
	         .
	  End Function
	
	The script line with the ERROR contains a wrong string calculation
	
	RESOLUTION
	==========
	
	Replace the line starting with "ERROR" in the "Cause" section with the following
	code:
	
	                  MimeEntry.MimeType = Right(MimeStr, len(MimeStr) - InStr (MimeStr, ","))
	
	Now you can use the ADSUTIL.vbs script to update your Mime types. The following
	example shows how to replace the MimeMap of the Default Web Site with a new one
	that lists two Mime types:
	
	  cscript adsutil set w3svc/1/root/MimeMap ".hmtlx,text/html" ".htmla,text/html"
	
	MORE INFORMATION
	================
	
	
	REFERENCES
	==========
	
	More information on the ADSUTIL.vbs script can be found in:
	
	  Q240225 Description of Adsutil and MetaEdit Used to Modify the Metabase
	
	Additional query words:
	
	======================================================================
	Keywords          : kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
