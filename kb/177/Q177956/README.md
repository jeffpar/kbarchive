---
layout: page
title: "Q177956: XFOR: Interoperability Between Exchange Server 5.0 and 5.5"
permalink: /kb/177/Q177956/
---

## Q177956: XFOR: Interoperability Between Exchange Server 5.0 and 5.5

{% raw %}

	Article: Q177956
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	There are a number of non-trivial interoperability issues between Exchange 5.0
	and 5.5 in RTF to HTML and Imail. Some of the issues are the following:
	
	1. If you create an HTML in any codepage OTHER then ANSI / ISO-8859-1 and put
	  some international characters between <TT> and </TT>. Then
	  convert the HTML round trip HTML->RTF->HTML the International
	  characters between <TT>> and </TT> are corrupted. This
	  corruption is permanent and can't be fixed y changing the browser character
	  set or font.
	
	2. After HTML->RTF conversion, an extra space at the line following
	  <Hn>...</Hn> is emitted.
	
	3. Loss of background color and bad formatting of table cells. Incorrect
	  handling of <TD> ... <TD> sequence (with no </TD>).
	
	4. The background color information is appended as text output after HTML-
	  >RTF->TEXT conversion.
	
	5. The Body tag property is corrupted when converted to Unicode.
	
	6. There is corruption of the <TITLE> tag of an embedded message when
	  converting to Unicode.
	
	7. Foreign mail using extended Latin characters gets sent as US-ASCII with all
	  the accents stripped.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Microsoft Exchange Server version
	5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	The same corruption happens for any HTML tag implying monospace font, i.e.,
	<TT>, <KBD>, <SAMP>, and <CODE>. The problem is caused
	by not marking the monospace font (second font in RTF font table) with the
	correct character set, which means the font is treated as ANSI.
	
	Since cell formatting is independent of the formatting outside of the table (IE
	and NN behavior), we now save and restore overlapping tag stack around tables
	and emit \plain keyword in RTF at the table start. Also, we make sure any new
	cell terminates the previous one and any cell formatting is ind pendent of each
	other (e.g., FONT started and not terminated in one cell does not propagate to
	the next one).
	
	RTF keywords \background and \shpinst needed to be marked as IGNORABLE, so that
	the destination gets ignored for plain text processing when in the encapsulated
	range.
	
	Now we have better codepage detection. In ambiguous cases (when the character
	fits into multiple codepages),we use the non-Western one. Specifically, if you
	compose a message using a non-Western character set on a machine set to the
	Western locale, we will use that character set even if the first nternational
	character encountered fits into Western codepage.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
