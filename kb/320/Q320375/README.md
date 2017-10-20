---
layout: page
title: "Q320375: HOW TO: Create GUIDs by Using Active Server Pages in IIS"
permalink: /kb/320/Q320375/
---

## Q320375: HOW TO: Create GUIDs by Using Active Server Pages in IIS

{% raw %}

	Article: Q320375
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbHOWTOmaster
	Last Modified: 15-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Services version 5.1 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	
	- SUMMARY
	
	   - Create a Simple Time-Based GUID
	- Create a Simple Time-Offset GUID
	- Create a More Unique Time-Offset GUID
	- Create a Simple Random GUID
	- Create a Variable-Length Random GUID
	- Create a Windows-Style Random GUID
	- Create a Stronger Windows-Style Random GUID
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article describes how to create several example pages by using
	various forms of GUIDs for Active Server Pages (ASP) pages to use. These values
	can be used to create unique data entries in a database, or anywhere else where
	a unique data field is required.
	
	NOTE: Because these examples do not use session variables, these examples also
	work on Web servers that have session state disabled.
	
	Create a Simple Time-Based GUID
	-------------------------------
	
	This example creates a simple 14-character time-based GUID by using the current
	year, month, day, hour, minute, and seconds. This permits you to sort data based
	on the GUID.
	
	1. Click Start, point to Programs, click Accessories, and then click Notepad to
	  open Notepad.
	
	2. Type or paste the following ASP code in Notepad:
	
	  <%@LANGUAGE="VBSCRIPT"%>
	  <HTML>
	  <BODY>
	  <%
	
	  Response.Write "GUID = " & CreateGUID()
	
	  Function CreateGUID()
	    Dim tmpTemp
	    tmpTemp = Right(String(4,48) & Year(Now()),4)
	    tmpTemp = tmpTemp & Right(String(4,48) & Month(Now()),2)
	    tmpTemp = tmpTemp & Right(String(4,48) & Day(Now()),2)
	    tmpTemp = tmpTemp & Right(String(4,48) & Hour(Now()),2)
	    tmpTemp = tmpTemp & Right(String(4,48) & Minute(Now()),2)
	    tmpTemp = tmpTemp & Right(String(4,48) & Second(Now()),2)
	    CreateGUID = tmpTemp
	  End Function
	  %>
	  </BODY>
	  </HTML>
	
	3. Save the page:
	
	  a. On the File menu, click Save.
	
	  b. Locate the root folder for your Web site, which is typically the
	     C:\InetPub\Wwwroot folder for the default Web site.
	
	  c. Name the file "GuidTest0.asp" (without the quotation marks).
	
	  d. Click Save.
	
	  e. On the File menu, click Exit.
	
	4. Locate the page with Microsoft Internet Explorer. You see a GUID. As you
	  refresh the page, you see the GUID increment.
	
	Create a Simple Time-Offset GUID
	--------------------------------
	
	This example creates a 20-character time-based GUID by using the offset in
	seconds from 12:00 midnight on January 1, 2000. This permits you to sort data
	based on the GUID, and can be updated to use any other date as the base.
	
	1. Click Start, point to Programs, click Accessories, and then click Notepad to
	  open Notepad.
	
	2. Type or paste the following ASP code in Notepad:
	
	  <%@LANGUAGE="VBSCRIPT"%>
	  <HTML>
	  <BODY>
	  <%
	
	  Response.Write "GUID = " & CreateGUID()
	
	  Function CreateGUID()
	    Dim tmpTemp1,tmpTemp2
	    tmpTemp1 = Right(String(15,48) & CStr(CLng(DateDiff("s","1/1/2000",Date()))), 15)
	    tmpTemp2 = Right(String(5,48) & CStr(CLng(DateDiff("s","12:00:00 AM",Time()))), 5)
	    CreateGUID = tmpTemp1 & tmpTemp2
	  End Function
	  %>
	  </BODY>
	  </HTML>
	
	3. Save the page:
	
	  a. On the File menu, click Save.
	
	  b. Locate the root folder for your Web site, which is typically the
	     C:\InetPub\Wwwroot folder for the default Web site.
	
	  c. Name the file "GuidTest1.asp" (without the quotation marks).
	
	  d. Click Save.
	
	  e. On the File menu, click Exit.
	
	4. Locate the page with Internet Explorer. You see a GUID. As you refresh the
	  page, you see the GUID increment.
	
	NOTE: This example permits uniqueness only when the function is not called two
	times in the same second. Any two calls to the function at the same second cause
	a collision. This may not cause a problem depending on how your code is using
	the function, but you can use the Create a More Unique Time-Offset GUID example
	to allow unique values that occur in the same second.
	
	Create a More Unique Time-Offset GUID
	-------------------------------------
	
	This example, like the Create a Simple Time-Offset GUID example, creates a
	time-based GUID, but it is 25 characters long. This example creates a
	20-character value from the offset in seconds from 12:00 midnight on January 1,
	2000, and appends an additional five random numbers to the end of that. This
	permits you to sort data based on the GUID, but permits much greater uniqueness.
	This can be updated to use any other date as the base.
	
	1. Click Start, point to Programs, click Accessories, and then click Notepad to
	  open Notepad.
	
	2. Type or paste the following ASP code in Notepad:
	
	  <%@LANGUAGE="VBSCRIPT"%>
	  <HTML>
	  <BODY>
	  <%
	
	  Response.Write "GUID = " & CreateGUID()
	
	  Function CreateGUID()
	    Randomize Timer
	    Dim tmpTemp1,tmpTemp2,tmpTemp3
	    tmpTemp1 = Right(String(15,48) & CStr(CLng(DateDiff("s","1/1/2000",Date()))), 15)
	    tmpTemp2 = Right(String(5,48) & CStr(CLng(DateDiff("s","12:00:00 AM",Time()))), 5)
	    tmpTemp3 = Right(String(5,48) & CStr(Int(Rnd(1) * 100000)),5)
	    CreateGUID = tmpTemp1 & tmpTemp2 & tmpTemp3
	  End Function
	  %>
	  </BODY>
	  </HTML>
	
	3. Save the page:
	
	  a. On the File menu, click Save.
	
	  b. Locate the root folder for your Web site, which is typically the
	     C:\InetPub\Wwwroot folder for the default Web site.
	
	  c. Name the file "GuidTest2.asp" (without the quotation marks).
	
	  d. Click Save.
	
	  e. On the File menu, click Exit.
	
	4. Locate the page with Internet Explorer. You see a GUID. As you refresh the
	  page, you see the first 20 characters of the GUID increment, and the last
	  five characters are random.
	
	NOTE: This example and the Create a Simple Time-Offset GUID example are created
	for time-based serialization of calls to the CreateGUID function. If sorting
	data based on time is not a requirement, you can use the Create a Simple Random
	GUID example to create a random GUID.
	
	Create a Simple Random GUID
	---------------------------
	
	1. Click Start, point to Programs, click Accessories, and then click Notepad to
	  open Notepad.
	
	2. Type or paste the following ASP code in Notepad:
	
	  <%@LANGUAGE="VBSCRIPT"%>
	  <HTML>
	  <BODY>
	  <%
	
	  Response.Write "GUID = " & CreateGUID()
	
	  Function CreateGUID()
	    Randomize Timer
	    Dim tmpCounter,tmpGUID
	    Const strValid = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	    For tmpCounter = 1 To 20
	      tmpGUID = tmpGUID & Mid(strValid, Int(Rnd(1) * Len(strValid)) + 1, 1)
	    Next
	    CreateGUID = tmpGUID
	  End Function
	  %>
	  </BODY>
	  </HTML>
	
	3. Save the page:
	
	  a. On the File menu, click Save.
	
	  b. Locate the root folder for your Web site, which is typically the
	     C:\InetPub\Wwwroot folder for the default Web site.
	
	  c. Name the file "GuidTest3.asp" (without the quotation marks).
	
	  d. Click Save.
	
	  e. On the File menu, click Exit.
	
	4. Locate the page with Internet Explorer. You see a 20-character random GUID.
	  As you refresh the page, you see the value change randomly.
	
	NOTE: This example creates a fixed-length random GUID. To create a
	variable-length GUID, use the Create a Variable-Length Random GUID example.
	
	Create a Variable-Length Random GUID
	------------------------------------
	
	1. Click Start, point to Programs, click Accessories, and then click Notepad to
	  open Notepad.
	
	2. Type or paste the following ASP code in Notepad:
	
	  <%@LANGUAGE="VBSCRIPT"%>
	  <HTML>
	  <BODY>
	  <%
	
	  Response.Write "<P>GUID = " & CreateGUID(10)
	  Response.Write "<P>GUID = " & CreateGUID(25)
	  Response.Write "<P>GUID = " & CreateGUID(50)
	
	  Function CreateGUID(tmpLength)
	    Randomize Timer
	    Dim tmpCounter,tmpGUID
	    Const strValid = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	    For tmpCounter = 1 To tmpLength
	      tmpGUID = tmpGUID & Mid(strValid, Int(Rnd(1) * Len(strValid)) + 1, 1)
	    Next
	    CreateGUID = tmpGUID
	  End Function
	  %>
	  </BODY>
	  </HTML>
	
	3. Save the page:
	
	  a. On the File menu, click Save.
	
	  b. Locate the root folder for your Web site, which is typically the
	     C:\InetPub\Wwwroot folder for the default Web site.
	
	  c. Name the file "GuidTest4.asp" (without the quotation marks).
	
	  d. Click Save.
	
	  e. On the File menu, click Exit.
	
	4. Locate the page with Internet Explorer. You see a 10-character, 25-character,
	  and 50-character random GUID. As you refresh the page, you see the values
	  change randomly.
	
	NOTE: This example and the Create a Simple Random GUID example both create
	strings of concatenated random characters. The Create a Windows-Style Random
	GUID example expands on this functionality to create a GUID that is formatted
	like a Microsoft Windows GUID.
	
	Create a Windows-Style Random GUID
	----------------------------------
	
	Windows primarily uses GUIDs when it registers Class IDs for components and other
	objects, but GUIDs can be used for anything. Windows GUIDs are long strings of
	formatted hexadecimal characters, meaning that they use the numbers 0 through 9
	and the letters A through F. (Microsoft Access also has a built-in Replication
	ID in the same format.) This example shows how to use code that is similar to
	the Create a Variable-Length Random GUID example code to create a GUID like a
	Windows GUID.
	
	1. Click Start, point to Programs, click Accessories, and then click Notepad to
	  open Notepad.
	
	2. Type or paste the following ASP code in Notepad:
	
	  <%@LANGUAGE="VBSCRIPT"%>
	  <HTML>
	  <BODY>
	  <%
	
	  Response.Write "<P>GUID = " & CreateWindowsGUID()
	
	  Function CreateWindowsGUID()
	    CreateWindowsGUID = CreateGUID(8) & "-" & _
	      CreateGUID(4) & "-" & _
	      CreateGUID(4) & "-" & _
	      CreateGUID(4) & "-" & _
	      CreateGUID(12)
	  End Function
	
	  Function CreateGUID(tmpLength)
	    Randomize Timer
	    Dim tmpCounter,tmpGUID
	    Const strValid = "0123456789ABCDEF"
	    For tmpCounter = 1 To tmpLength
	      tmpGUID = tmpGUID & Mid(strValid, Int(Rnd(1) * Len(strValid)) + 1, 1)
	    Next
	    CreateGUID = tmpGUID
	  End Function
	  %>
	  </BODY>
	  </HTML>
	
	3. Save the page:
	
	  a. On the File menu, click Save.
	
	  b. Locate the root folder for your Web site, which is typically the
	     C:\InetPub\Wwwroot folder for the default Web site.
	
	  c. Name the file "GuidTest5.asp" (without the quotation marks).
	
	  d. Click Save.
	
	  e. On the File menu, click Exit.
	
	4. Locate the page with Internet Explorer. You see a random GUID that is
	  formatted like a Windows GUID. As you refresh the page, you see the value
	  change randomly.
	
	Create a Stronger Windows-Style Random GUID
	-------------------------------------------
	
	Because Windows GUIDs use hexadecimal numbers for each character, 16 values are
	possible per character in the GUID. If you expand the values to include the
	whole alphabet, 36 values are possible per character in the GUID. This example
	uses the function from the Create a Variable-Length Random GUID example to
	create a GUID in the same format as a Windows GUID.
	
	1. Click Start, point to Programs, click Accessories, and then click Notepad to
	  open Notepad.
	
	2. Type or paste the following ASP code in Notepad:
	
	  <%@LANGUAGE="VBSCRIPT"%>
	  <HTML>
	  <BODY>
	  <%
	
	  Response.Write "<P>GUID = " & CreateWindowsGUID()
	
	  Function CreateWindowsGUID()
	    CreateWindowsGUID = CreateGUID(8) & "-" & _
	      CreateGUID(4) & "-" & _
	      CreateGUID(4) & "-" & _
	      CreateGUID(4) & "-" & _
	      CreateGUID(12)
	  End Function
	
	  Function CreateGUID(tmpLength)
	    Randomize Timer
	    Dim tmpCounter,tmpGUID
	    Const strValid = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	    For tmpCounter = 1 To tmpLength
	      tmpGUID = tmpGUID & Mid(strValid, Int(Rnd(1) * Len(strValid)) + 1, 1)
	    Next
	    CreateGUID = tmpGUID
	  End Function
	  %>
	  </BODY>
	  </HTML>
	
	3. Save the page:
	
	  a. On the File menu, click Save.
	
	  b. Locate the root folder for your Web site, which is typically the
	     C:\InetPub\Wwwroot folder for the default Web site.
	
	  c. Name the file "GuidTest6.asp" (without the quotation marks).
	
	  d. Click Save.
	
	  e. On the File menu, click Exit.
	
	4. Locate the page with Internet Explorer. You see a random GUID that is
	  formatted like a Windows GUID. As you refresh the page, you see the value
	  change randomly.
	
	REFERENCES
	==========
	
	For additional information about programming topics that are related to Windows
	GUIDs, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q183544 HOWTO: Call CLSID And ProgID Related COM APIs in Visual Basic
	
	  Q304269 ACC2002: Explanation of Data Types and Field Properties in a
	  Microsoft Access Database
	
	  Q176790 HOWTO: Use CoCreateGUID API to Generate a GUID with VB
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHOWTOmaster 
	Technology        : kbiisSearch kbiis500 kbiis400 kbiis510
	Version           : :4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
