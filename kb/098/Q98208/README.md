---
layout: page
title: "Q98208: SMTP: When the SMTP Gateway Uses Quotation Marks"
permalink: /kb/098/Q98208/
---

## Q98208: SMTP: When the SMTP Gateway Uses Quotation Marks

{% raw %}

	Article: Q98208
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail Gateway to SMTP is RFC 822 compliant regarding double and
	single quotation marks.
	
	MORE INFORMATION
	================
	
	Double Quotation Marks
	----------------------
	
	Double quotation marks are for when certain special characters are used within
	the header fields of the message. The special characters are listed in RFC 822,
	section 3.3, titled "Lexical Tokens." The special characters are:
	
	 (    Left parenthesis
	 )    Right parenthesis
	 <    Less-than sign
	 >    Greater-than sign
	 @    At sign
	 ,    Comma
	 ;    Semicolon
	 :    Colon
	 \    Backslash
	 "    Double quotation marks
	 .    Period
	 [    Left square bracket
	 ]    Right square bracket
	
	If the gateway sees any of these characters within the header fields, it uses
	double quotation marks around the information.
	
	Note: If a SMTP host wants to enclose something in double quotation marks, the
	text enclosed can be any ASCII character, or white space, EXCEPT:
	
	 "       Double quotation marks
	 \       Backslash
	 CR      Carriage return
	
	Single Quotation Marks
	----------------------
	
	RFC 822 does not include any discussion on single quotation marks.
	
	REFERENCES
	==========
	
	RFC 822: Standard for the Format of ARPA Internet Text Messages
	
	Additional query words: 3.00 curly curley special
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300 kbMailGateSMTP210
	Version           : MS-DOS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
